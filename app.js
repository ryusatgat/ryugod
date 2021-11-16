#!/usr/local/bin/node

const express = require('express')
const serveIndex = require('serve-index')
const pty = require('node-pty')
const crypto = require('crypto')
const { spawn } = require("child_process")
const http = require('http')
const websocket = require('ws')
const hljs = require('highlight.js')
const urlencode = require('urlencode')
const fs = require('fs')
const { SIGTERM, SIGQUIT, SIGINT, SIGKILL } = require('constants')
const app = express()
app.disable('x-powered-by')
const base_dir = '/home/ryugod'
const port = 5000
const md = require('markdown-it')({
    highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs">' +
                hljs.highlight(str, {language: lang}, true).value +
               '</pre>';
      } catch (e) {log.err(e.message)}
    }

    return '<pre class="hljs">' + md.utils.escapeHtml(str) + '</pre>';
  }
})
const mdi = require('markdown-it-mdi')

let dockerCount = 0

md.use(mdi)

app.use(express.static(base_dir + '/public'))
app.use(express.json({limit : "1gb"}));
app.use(express.urlencoded({limit : "1mb", extended: false}));
app.use('/list', serveIndex(base_dir + '/contents'))

const sendStatic = (req, res) => {
	url = urlencode.decode(req.url)
	const path = base_dir + url

	if (fs.existsSync(path)) {
		fs.readFile(path, function(err, data) {
			if (err)
				console.err(err.message)
			else {
				res.send(data)
			}
		})
	}
	else {
        res.redirect(`/contents/404.md`)
	}
}

hash = () => {
    return crypto.createHmac('sha256', 'mysharedsource01').update(Date.now().toString()).digest('base64').replace('/', '_').substr(0, 10)
}

app.post('/', (req, res) => {
    const path = base_dir + '/public/index.html'
    res.sendFile(path)
})

app.post('/shareMySource', (req, res) => {
    const base_path = `${base_dir}/contents/shared/${req.body.params.language}`

    if (!fs.existsSync(base_path))
        fs.mkdirSync(base_path)

    let h = hash()
    let path = `${base_path}/${h}.template`

    while (fs.existsSync(path)) {
        console.log(`hash collision ${h}, recreating...`)
        h = hash()
        path = `${base_path}/${h}.template`
    }

    fs.writeFile(path, req.body.params.source, function(err) {
        if(err) {
            return res.send('')
        }
        res.send(h)
        console.log(`created shared source ${path}...`)
    });
})

app.get('/pages/?**', (req, res) => {
    const path = base_dir + '/public/index.html'
    res.sendFile(path)
})

app.get('/list/*\.(md|template|png)$', (req, res) => {
    const url = urlencode.decode(req.url).replace('/list/', '/contents/')
    const path = base_dir + url

    if (fs.existsSync(path, {encoding:'utf-8'})) {
        res.sendFile(path)
    }
    else {
        res.redirect(`/contents/404.md`)
    }
})

app.get('/contents/*\.(template)$', (req, res) => {
    const url = urlencode.decode(req.url)
    const path = base_dir + url

    if (fs.existsSync(path, {encoding:'utf-8'})) {
        res.sendFile(path)
    }
    else {
        res.redirect(`/contents/404.md`)
    }
})

app.get('*\.(png|js)$', (req, res) => {
    sendStatic(req, res)
})

app.get('*\.(md|md.html|template|template.html)$', (req, res) => {
    const url = urlencode.decode(req.url).replace(/\.html$/, '')
    const path = base_dir + url

    if (fs.existsSync(path, {encoding:'utf-8'})) {
        stats = fs.statSync(path)
        fs.readFile(path, 'utf8', function(err, data) {
            if (err)
                console.err(err.message)
            else {
                if (url.match(/\.template(\.html)?$/)) {
                    data = `# ${url}\n` + '```\n' + data + '\n```'
                }
                const html = '<html>' +
                '<head>' +
                '<body>' +
                md.render(data) +
                `<hr><sub><sup>Modified at ${stats.mtime}</sup></sub>` +
                '</body></html>'
                res.header('Access-Control-Allow-Origin', '*')
                res.send(html)
            }
        })
    }
    else {
        res.redirect(`/contents/404.md`)
    }
})

app.get('*\.(html|jsls)$', (req, res) => {
    sendStatic(req, res)
})

app.get('/sitemap.xml', (req, res) => {
    const path = base_dir + '/contents'
    const file_list = []

    readdir = (path, file_list) => {
        if (fs.existsSync(path, {encoding:'utf-8'})) {
            stats = fs.lstatSync(path)
            const files = fs.readdirSync(path, {encoding:'utf-8'})

            files.sort()

            for (file of files) {
                const fpath = path + '/' + file

                if (fs.existsSync(fpath, {encoding:'utf-8'})) {
                    stats = fs.lstatSync(fpath)
                    if (stats.isDirectory()) {
                        readdir(path + '/' + file, file_list)
                        continue
                    }

                    if (file.slice(-3) === '.png')
                        continue

                    file_list.push(`<url><loc>https://www.ryugod.com${fpath.replace(base_dir, '').replace(/\/contents\//, '/pages/')}</loc>` +
                        `<lastmod>${stats.mtime.toISOString()}</lastmod></url>`)
                }
            }
        }
    }

    readdir(path, file_list)

    const html = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        file_list.join('\n') +
        '</urlset>\n'

    res.send(html)
})

app.get('/contents/?**', (req, res) => {
    const url = urlencode.decode(req.url)
    const path = base_dir + url
    var ret = {}

    if (fs.existsSync(path, {encoding:'utf-8'})) {
        stats = fs.lstatSync(path)
        if (stats.isDirectory()) {

            fs.readdir(path, {encoding:'utf-8'}, (err, files) => {
                if (err) {
                    console.log(err)
                    res.send('Error')
                }

                if (path.match(/\/shared\//)) {
                    res.send('')
                    return
                }

                file_list = []
                files.sort()
                files.map(file => {
                    stats = fs.lstatSync(path + '/' + file)
                    isDir = stats.isDirectory()
                    if (isDir || file.endsWith('\.md') || file.endsWith('\.template')) {
                        subfiles = isDir ? fs.readdirSync(path + '/' + file, {encoding:'utf-8'}):[]
                        subfiles.sort()
                        subfiles = subfiles.filter(f => f.endsWith('\.md') || f.endsWith('\.template'))
                        file_list.push({name:file,type:isDir ? "d":"f",list:subfiles})
                    }
                })

                ret["path"] = url
                ret["list"] = file_list
                res.header('Access-Control-Allow-Origin', '*')
                res.send(ret)
            })
            return
        }
    }

    res.redirect(`/contents/404.md`)
})

const server = http.createServer(app).listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

const websocketServer = new websocket.Server(
    {server, path: '/terminal'}
)

setInterval(function ping() {
	if (websocketServer.clients.size > 0) {
		websocketServer.clients.forEach(function each(socket) {
			if (socket.isAlive === false) return socket.terminate()

			socket.isAlive = false;
			socket.ping(websocketServer.clients.size)
            socket.send('2' + websocketServer.clients.size)
		})
	}
}, 5000)

let docker_seq = 0

websocketServer.on('connection', (ws, req) => {
    docker_seq = docker_seq > 99999999 ? 0 : docker_seq+1
    let logMessage = ''
    const docker_name = 'RS' + `0000000${docker_seq}`.slice(-8)

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    var lang = req.headers["accept-language"]
    var locale = (lang && lang.split(',')[0].indexOf("ko") >= 0)?'ko_KR':'C'
    console.log(new Date().toString(), 'connected...', ip, docker_name, lang)

    const child = pty.spawn('/usr/bin/docker', [
        'run',
        '--env',
        `LANG=${locale}.UTF-8`,
        '--env',
        'TMOUT=1200',
        '--env',
        `DOCKER_NAME=${docker_name}`,
        '-it',
        '--name',
        docker_name,
        '--rm',
        '--workdir',
        '/home/ryugod',
        '--user',
        'ryugod',
        '--hostname',
        'ryugod-server',
        'ubuntu:ryugod',
        '/bin/bash'
    ], {
        name: 'xterm-color',
    })
    console.log('forking docker: ', docker_name, child.pid)
    dockerCount++

    child.onData((data) => {
        ws.send('1' + data.toString())
    })
    child.onExit((code) => {
        ws.close()
        dockerCount--
        console.log('child closed', docker_name, child.pid, code)
    })

    ws.on('message', (message) => {
        const cmd = message[0]
        switch (cmd) {
        case '1':
            if (message) {
                const msg = message.slice(1)
                child.write(msg)
            }
            break
        case '2': /* resize */
            const size = message.split(' ')
            child.resize(parseInt(size[1]), parseInt(size[2]))
            break
        }
    })
    ws.on('close', (e) => {
        spawn('docker', ['kill', docker_name]).on('close', code => {            
            console.log('socket closed...', new Date().toString(), docker_name, child.pid, e)
        })
    })
    ws.on('error', (err) => {
        console.log('error occured', err)
    })
    ws.on('pong', () => {
        ws.isAlive = true
    })
})
