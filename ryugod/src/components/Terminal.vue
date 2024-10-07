<template>
  <div id='div-client' class="client">
  <!--
  <v-container class="pa-0">

  -->
    <div id='div-editor' @drop="dropHandler" @dragover="dragOverHandler">
      <v-app-bar color="toolbar" id="v-toolbar" height="32px">
        <v-app-bar-nav-icon :dark="dark" @click="$emit('toggleMenu')"></v-app-bar-nav-icon>
        <v-icon @click="showLanguageList()" color="primary">{{languageIcon}}</v-icon>
        <v-combobox
          :items="Object.keys(languages)"
          @change="onChangeLanguage"
          dense
          :menu-props="{maxHeight: 480}"
          hide-details
          auto-select-first
          v-model="languageFilter"
          style="max-width: 120px;min-width: 120px;"
          solo
          :filter="(item, queryText, itemText) => {return itemText.toLocaleLowerCase().includes(queryText.toLocaleLowerCase())}"
        ></v-combobox>
        <v-tooltip bottom>
          <span>{{$t('connect')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='connect' v-bind="attrs" v-on="on" :disabled="connected">
            <v-icon dense color="green">mdi-lan-connect</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('disconnect')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='disconnect' v-bind="attrs" v-on="on" :disabled="!connected">
            <v-icon dense color="error">mdi-lan-disconnect</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('repl')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small :disabled="!(languages[selectedLanguage] && languages[selectedLanguage].cli && termStr && termStr.match(/.*(\$|#) $/i))" @click="editor.focus(), editor.trigger('', 'repl')" v-bind="attrs" v-on="on">
            <v-icon dense color="green">mdi-code-greater-than</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('run')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small :disabled='false' @click='executeCheck()' v-bind="attrs" v-on="on">
            <v-icon dense color="green">mdi-play</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('sendToTerminal')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='execute()' v-bind="attrs" v-on="on" :disabled="!connected">
            <v-icon dense color="green">mdi-playlist-play</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('commandPalette')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click="editor.focus(), editor.trigger('F1', 'editor.action.quickCommand')" v-bind="attrs" v-on="on">
            <v-icon dense color="yellow">mdi-flash</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('load')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='sourceControl("open", selectedLanguage)' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-folder-open-outline</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('save')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='sourceControl("save", selectedLanguage)' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-content-save-outline</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('shareSource')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='shareSource()' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-share-variant-outline</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('import')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='importFile()' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-import</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('export')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='saveAs()' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-export</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('options')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='showSettingsDialog' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-tools</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('github')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='openSite("https://github.com/ryusatgat/ryugod")' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-github</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('about')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='messageBox("about", 800)' v-bind="attrs" v-on="on">
            <v-icon dense color="yellow">mdi-information-outline</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('help')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn text x-small @click='messageBox("help", 800)' v-bind="attrs" v-on="on">
            <v-icon dense color="yellow">mdi-help-circle-outline</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
      </v-app-bar>
      <v-slide-group
        v-model="fileTabIndex"
        id="file-tabs"
        mandatory
        show-arrows
        @change="onChangeFileTab"
      >
        <v-slide-item
          v-for="(item, index) in fileTabs"
          :key="index"
          v-slot="{ active, toggle }"
          height="24px"
        >
          <v-btn
            class="text-truncate"
            text
            tile
            small
            :input-value="active"
            active-class="indigo darken-4 white--text"
            depressed
            @click="toggle"
            @contextmenu="toggle(), tabContaxMenu($event)"
            style="text-transform: none !important;"
          >
            <v-text-field
              :disabled="!active"
              :readonly="item.filename === defaultFilename"
              :value="`${item.filename}`"
              single-line
              class='text-caption'
              style='border-style:none;'
              @change="renameTab"
              @blur="renaming=false"
              v-if="renaming && active && item.filename !==defaultFilename"
              autofocus
            ></v-text-field>
            <span class="d-inline-block text-truncate"
              style="max-width: 120px;"
              v-on:dblclick="renaming=true"
              v-else
            >
              {{languages[selectedLanguage] && `${item.filename}.${languages[selectedLanguage].ext}`}}
            </span>

            <v-spacer>
            </v-spacer>
            <v-btn icon text x-small>
            <!--<v-btn icon text x-small v-if="item.filename !== defaultFilename">-->
            <v-icon
              color="pink lighten-4"
              dense
              v-text="'mdi-close'"
              @click="closeTab"
            ></v-icon>
            </v-btn>
          </v-btn>
        </v-slide-item>
        <div>
          <v-tooltip bottom>
            <span>{{$t('newTab')}}</span>
            <template v-slot:activator="{ on, attrs }">
            <v-btn small icon @click='newTab' v-bind="attrs" v-on="on">
              <v-icon small>mdi-plus</v-icon>
            </v-btn>
            </template>
          </v-tooltip>
        </div>
      </v-slide-group>
      <div id="monaco"></div>
    </div>
  <!--
  </v-container>
  -->
    <div class="resizer" id="resizer"></div>
    <div>
      <v-toolbar fixed color="toolbar" id='v-footer' height="24px">
        <v-tabs
          show-arrows
          @change="this.fitSize"
          v-model="terminalTab"
          height="24px"
        >
          <v-tab key="0" href="#tab-0">{{$t('terminal')}}{{connected && count ?` - ${count}`:""}}</v-tab>
          <v-tab key="1" href="#tab-1">{{$t('input')}}</v-tab>
          <v-tab key="2" href="#tab-2">{{$t('output')}}</v-tab>
        </v-tabs>

        <!--
        <v-text-field flat dense disabled :value='connected?"Online":"Offline"'></v-text-field>
        <v-text-field flat dense disabled :value='count ? ` - ${count} connected`:""'></v-text-field>
        -->
        <v-spacer></v-spacer>
        <v-layout justify-end>
        <v-tooltip bottom>
          <span>{{$t('clear')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn icon small @click='removeImages()' v-bind="attrs" v-on="on" :disabled="terminalTab!=='tab-2'">
            <v-icon dense>mdi-image-off-outline</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('decreasePannel')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn icon small @click='resizeTermScreen(true)' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-chevron-down</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{$t('increasePannel')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn icon small @click='resizeTermScreen(false)' v-bind="attrs" v-on="on">
            <v-icon dense>mdi-chevron-up</v-icon>
          </v-btn>
          </template>
        </v-tooltip>
        <v-tooltip bottom>
          <span>{{fullTerminal?$t('restorePannel'):$t('maximizePannel')}}</span>
          <template v-slot:activator="{ on, attrs }">
          <v-btn icon small @click='toggleTermScreen' v-bind="attrs" v-on="on">
            <v-icon dense v-if="fullTerminal">mdi-fullscreen-exit</v-icon>
            <v-icon dense v-else>mdi-fullscreen</v-icon></v-btn>
          </template>
        </v-tooltip>
        </v-layout>
      </v-toolbar>
      <v-tabs-items v-model="terminalTab" color="black">
      <v-tab-item key="0" value="tab-0">
        <div id="con-terminal" class='con-bottom'>
          <div id='terminal' @drop="onDrop" @dragover="onDragOver"></div>
        </div>
      </v-tab-item>
      <v-tab-item key="1" value="tab-1">
        <div id="con-input" class='con-html'>
          <v-textarea
            v-model="inputValue"
            :placeholder="$t('autoinput')"
            rows=25
          ></v-textarea>
        </div>
      </v-tab-item>
      <v-tab-item eager key="2" value="tab-2">
        <div id="con-html" class='con-html'>
        </div>
      </v-tab-item>
      </v-tabs-items>
    </div>
    <ShowMessage ref="about" :title="$t('about')"><div class="markdown-body" v-html="contents"></div></ShowMessage>
    <ShowMessage ref="help" :title="$t('help')"><div class="markdown-body" v-html="contents"></div></ShowMessage>
    <ShowMessage ref="nosource" :title="$t('shareSource')">{{$t('run')}}</ShowMessage>
    <ShowMessage ref="shared" :title="$t('shareSource')">
      <a :href="sharedURL"><v-img :src="QRCode"></v-img></a>
    </ShowMessage>
    <LanguageList @navigate="navigate" ref="languageList"></LanguageList>
    <v-menu
      v-model="tabMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
    >
      <v-list dense>
        <v-list-item
          v-for="(item, index) in tabMenus"
          :key="index"
          link
          @click="contextMenuClick(item.id)"
        >
          <v-list-item-title class="caption"><v-icon>{{item.icon}}</v-icon>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
    >
      {{snackbar_message}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          {{$t('close')}}
        </v-btn>
      </template>
    </v-snackbar>
    <Settings
      ref="settingsDialog"
      @saveOptions="saveOptions"
    >
    </Settings>
  </div>
</template>

<style src='../styles/github-markdown.css'></style>
<style src='../styles/vs2015.css'></style>
<script>
const pako = require('pako')
import * as monaco from 'monaco-editor'
import {Terminal} from 'xterm'
import {FitAddon} from 'xterm-addon-fit'
import {languages} from './languages.js'
import qrcode from 'qrcode'
import axios from 'axios'
import ShowMessage from './ShowMessage'
import LanguageList from './LanguageList'
import Settings from './Settings'

//import ToolbarIcon from './ToolbarIcon'
/*
import {SimpleWorkerServer} from 'monaco-editor/esm/vs/base/common/worker/simpleWorker'
import {TypeScriptWorker} from 'monaco-editor/esm/vs/language/typescript/tsWorker'
import {HTMLWorker} from 'monaco-editor/esm/vs/language/html/htmlWorker'

import {TypeScriptWorker} from 'monaco-editor/esm/vs/language/typescript/tsWorker'
import {HTMLWorker} from 'monaco-editor/esm/vs/language/html/htmlWorker'
import {EditorSimpleWorker} from 'monaco-editor/esm/vs/editor/common/services/editorSimpleWorker.js'
*/

export default {
  name: 'Terminal',

  components: {
    ShowMessage,
    LanguageList,
    Settings,
//    ToolbarIcon,
  },
  props: {
    dark: Boolean,
  },
  data: () => ({
    locale: 'en',
    filename: 'main',
    defaultFilename: 'main',
    renaming: false,
    tabMenu: false,
    x: 0,
    y:0,
    tabMenus: null,
    languageFilter: '',
    dispose: null,
    befDecorations: [],
    decorations: [],
    befFileTab: null,
    fileTabIndex: null,
    fileTabs: [],
    langMenu: false,
    terminalTab: "tab-0",
    befHeight: 0,
    snackbar: false,
    snackbar_message: "",
    termStr: "",
    fullTerminal: false,
    contents: "",
    inputValue: "",
    languageIcon: 'mdi-bash',
    selectedLanguage: 'Bash',
    QRCode: '',
    sharedURL: '',
    options: {selectedLanguage: 'Bash', tabSize: 4, dark: true},
    languages: null,
    sharedHash: String,
    fitAddon: new FitAddon(),
    connected: false,
    count: null,
    ws: null,
    term: null,
    editor: null,
  }),
  watch: {
    dark: {
      immediate: true,
      handler (val) {
        monaco.editor.setTheme(val?'vs-dark':'vs')
        this.options.dark && this.options.dark !== this.$vuetify.theme.dark && this.optionControl('save')
      }
    },
    $route (to) {
      const path_to = encodeURIComponent(to.path).split('/')[3]
      if (path_to) {
        for (const l in this.languages) {
          if (this.languages[l].template === path_to) {
            this.onChangeLanguage(l)
            break
          }
        }
      }
    }
  },
  methods: {
    openLastSource: function () {
      this.sourceControl('open', this.selectedLanguage)
    },
    showSettingsDialog: function () {
      const options = {
        dark: this.$vuetify.theme.dark,
        selectedLanguage: this.selectedLanguage,
        tabSize: this.editor.getModel().getOptions()['tabSize'],
        fontSize: this.editor.getOption(monaco.editor.EditorOption.fontSize),
        args: this.options[`${this.languages[this.selectedLanguage].template}.args`] ?
          this.options[`${this.languages[this.selectedLanguage].template}.args`]:this.languages[this.selectedLanguage].args
      }

      this.$refs["settingsDialog"].show(options)
    },
    saveOptions: function (options) {
      if (options) {
        this.$vuetify.theme.dark = options.dark
        this.editor.updateOptions({fontSize:options.fontSize})
        this.options['tabSize'] = options.tabSize
        this.options[`${this.languages[this.selectedLanguage].template}.args`] = options.args
        if (!this.languages[this.selectedLanguage].tabSize)
          this.editor.getModel().updateOptions({tabSize:this.options['tabSize']})
console.log(this.options['tabSize'])
      }
      this.optionControl('save')
      this.showSnackbar(this.$t('savedOptions'))
    },
    showSnackbar: function(msg) {
      this.snackbar_message = msg
      this.snackbar = true
    },
    tabContaxMenu: function (e) {
      e.preventDefault()
      this.tabMenu = false
      this.x = e.clientX
      this.y = e.clientY
      this.$nextTick(() => {
        this.tabMenu = true
      })
    },
    contextMenuClick: function (e) {
      switch (e) {
      case 'close':
        this.closeTab()
        break
      case 'new':
        this.newTab()
        break
      case 'rename':
        this.renaming = true
        break
      }
    },
    newTab: function() {
      let index = 999
      for (let i=0; i<100; i++) {
        if (!this.fileTabs.filter(e=>e.filename === `noname${i}`)[0]) {
          index = i
          break
        }
      }
      this.fileTabs.push({
        filename: `noname${index}`,
        saved: true,
        value: '',
        position: null,
        scrollPosition: {scrollLeft: 0, scrollTop: 0}
      })
      this.onChangeFileTab(this.fileTabs.length-1)
    },
    renameTab: function(e) {
      let filename = e.replace(`.${this.languages[this.selectedLanguage].ext}`, '')

      if (this.fileTabs.filter(e=>e.filename === filename)[0]) {
        this.fileTabs[this.fileTabIndex].filename = this.filename
        this.showSnackbar(this.$t('fileExists'))
        return
      }

      if (filename.match(/.*[&$/'"?<>* ].*/) || filename.length === 0) {
        this.fileTabs[this.fileTabIndex].filename = this.filename
        this.showSnackbar(this.$t('incorrectFilename'))
        return
      }

      this.sourceControl('rename', this.selectedLanguage, filename)
      this.renaming = false
    },
    onChangeFileTab: function(tab) {
      this.renaming = false

      if (!this.editor || !this.fileTabs[tab])
        return

      const tabName = this.fileTabs[tab].filename
      const getTab = (tabName) => { return this.fileTabs.filter(e => e.filename === tabName)[0] }
      const befTab = getTab(this.befFileTab)

      if (befTab) {
        befTab.scrollPosition.scrollLeft = this.editor.getScrollLeft()
        befTab.scrollPosition.scrollTop = this.editor.getScrollTop()
        befTab.position = this.editor.getPosition()
        befTab.value = this.editor.getValue()
      }

      this.filename = this.fileTabs[tab].filename
      this.fileTabIndex = tab

      if (this.fileTabs[tab].value === null)
        this.sourceControl('open', this.selectedLanguage)
      else
        this.editor.setValue(this.fileTabs[tab].value)
      this.editor.getModel().setEOL(0)
      this.fileTabs[tab].position && this.editor.setPosition(this.fileTabs[tab].position)
      this.fileTabs[tab].scrollPosition && this.editor.setScrollPosition(this.fileTabs[tab].scrollPosition)
      this.befFileTab = tabName
      this.editor.focus()
    },
    closeTab: function() {
      this.sourceControl('close', this.selectedLanguage)
    },
    copyToClipboard: function(txt) {
      const dummy = document.createElement("input")
      const text  = txt

      document.body.appendChild(dummy)
      dummy.value = text
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
    },
    setEditorValue(value) {
      this.editor.setValue(value)
      this.editor.setScrollLeft(0)
      this.editor.setScrollTop(0)
      this.editor.focus()
    },
    optionControl: function(flag) {
      switch (flag) {
        case 'save':
          localStorage.setItem('selectedLanguage', this.selectedLanguage)
          localStorage.setItem('dark', this.$vuetify.theme.dark ? "true":"false")
          localStorage.setItem('tabSize', this.options['tabSize'])
          localStorage.setItem('fontSize', this.editor.getOption(monaco.editor.EditorOption.fontSize))
          break
        case 'load': {
          this.options['selectedLanguage'] = localStorage.getItem('selectedLanguage')
          this.options['dark'] = localStorage.getItem('dark') == null ? true:localStorage.getItem('dark')==='true'
          this.options['fontSize'] = localStorage.getItem('fontSize') == null ? 14:localStorage.getItem('fontSize')
          this.selectedLanguage = this.options['selectedLanguage'] == null ? 'Bash':this.options['selectedLanguage']
          this.options['tabSize'] = localStorage.getItem('tabSize') == null ? 4:localStorage.getItem('tabSize')
          this.defaultFilename = this.languages[this.selectedLanguage].defaultFilename?this.languages[this.selectedLanguage].defaultFilename:"main"
          this.$vuetify.theme.dark = this.options['dark']
          this.editor.updateOptions({fontSize:this.options['fontSize']})
          this.editor.getModel().updateOptions({tabSize:this.languages[this.selectedLanguage].tabSize?this.languages[this.selectedLanguage].tabSize:this.options['tabSize']})
          this.sourceControl('tabs', this.selectedLanguage)
          const path = this.$route.params.app_path?
            this.$route.params.app_path:
            `shared/${this.languages[this.selectedLanguage].template}`

          if (path) {
            const contents = path.split('/')
            if (contents && contents[1]) {
              for (const l in this.languages) {
                if (this.languages[l].template === contents[1]) {
                  if (!(path.endsWith('.template') || path.endsWith('.md'))) {
                    const source = path.split("/").pop()
                    if (source.startsWith('source:')) {
                      this.onChangeLanguage(l, true)
                      return
                    }
                  }

                  this.onChangeLanguage(l, window.location.pathname.startsWith('/pages/shared') || window.location.href.endsWith('.template'))
                  break
                }
              }
            }
          }

          break
        }        
      }
    },
    sourceControl: function(flag, language, newFileName) {
      switch (flag) {
        case 'save': {
            const source = this.editor.getValue()

            localStorage.setItem(language + "." + this.filename, source)
            this.showSnackbar(`${language} - ${this.filename} ${this.$t('saved')}`)
            this.fileTabs[this.fileTabIndex].saved = true
          }
          break
        case 'open':
          if (localStorage.getItem(language + "." + this.filename))
            this.setEditorValue(localStorage.getItem(language + "." + this.filename))
          break
        case 'close': {
          localStorage.removeItem(language + "." + this.filename)
          const tab = this.fileTabIndex == this.fileTabs.length-1 ? this.fileTabs.length-1 : this.fileTabIndex
          this.befFileTab = null

          if (this.fileTabs.length == 1) {
            this.fileTabs[0].value = this.editor.getValue()
          }
          if (this.fileTabIndex > 0)
            this.fileTabs.splice(this.fileTabIndex, 1)

          this.onChangeFileTab(tab)
          break
        }
        case 'rename':
          localStorage.setItem(language + "." + newFileName, localStorage.getItem(language + "." + this.filename))
          localStorage.removeItem(language + "." + this.filename)
            
          this.fileTabs[this.fileTabIndex].filename = newFileName
          this.filename = newFileName              
          
          break
        case 'tabs': {
          this.defaultFilename = this.languages[language].defaultFilename?this.languages[language].defaultFilename:"main"
          this.fileTabs = [{filename: this.defaultFilename, saved: true, value: '', position: null, scrollPosition: {scrollLeft: 0, scrollTop: 0}}]
          let keys = Object.keys(localStorage)
          let i = keys.length

          while (i--) {
            if (keys[i].startsWith(language + ".")) {
              let filename = keys[i].substring(language.length+1);
              if (filename === this.defaultFilename)
                continue
              this.fileTabs.push({
                filename: filename, saved: true, value: null, position: null, scrollPosition: {scrollLeft: 0, scrollTop: 0}
              })
            }
          }              

          break
        }
      }
    },
    sendFile: function (file) {
      if (file.size > 1024*1024*10) {
        this.showSnackbar(`ℹ️  최대 10M까지 가능합니다(${file.name}, ${file.size}바이트)`)
        return
      }
      const reader = new FileReader()
      reader.onload = (event) => {
        if (this.connected) {
          this.ws.send(`1\n# ℹ️  ${file.name} 파일을 전송합니다(${file.size}bytes). 완료될 때까지 기다려 주세요...\n` +
            `cat << 'RYUGOD_EOF' | sed s/.*,// | base64 -d > '${file.name}'\n` +
            event.target.result+`\nRYUGOD_EOF\r\n# ℹ️  ${file.name} 전송완료\n`)
        }
      }
      reader.readAsDataURL(file);
    },
    importFile: function () {
      const input = document.createElement('input')
      input.type = 'file'
      input.setAttribute('multiple', null)
      input.onchange = () => {
        const files = Array.from(input.files)

        for (const file of files)
          this.getFileContents(file)
      }
      input.click()
    },
    getFileContents: function(file) {
      //const ext = re_ext == null ? this.languages[this.selectedLanguage].ext:re_ext

      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = (e) => {
          this.addTab(e.target.filename, e.target.result)
          resolve(e.target.result)
        }
        reader.onerror = (e) => {
          reject(e)
        }
        reader.filename = file.name.replace(`.${this.languages[this.selectedLanguage].ext}`, '')
        reader.readAsText(file)
      })
    },
    addTab: function (filename, value) {
      const ext = `.${this.languages[this.selectedLanguage].ext}`
      if (filename.endsWith(ext))
        filename = filename.replace(ext, '')

      if (this.fileTabs.filter(e=>e.filename === filename)[0]) {
        filename !== this.defaultFilename && this.showSnackbar(`${filename} 동일한 파일명이 존재하여 불러올 수 없습니다`)
        return
      }

      this.fileTabs.push({
        filename: filename,
        saved: true,
        value: value,
        position: null,
        scrollPosition: {scrollLeft: 0, scrollTop: 0}
      })

      this.onChangeFileTab(this.fileTabs.length-1)
    },
    dropHandler: function (ev) {
      let i
      //const reader = new FileReader()

/*
      reader.onload = function(progressEvent) {

      }
*/
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault()

      if (ev.dataTransfer.items) {
        for (i = 0; i < ev.dataTransfer.items.length; i++) {
          if (ev.dataTransfer.items[i].kind === 'file') {
            var file = ev.dataTransfer.items[i].getAsFile()
            //reader.fileName = file.name
            //reader.readAsText(file)
            this.getFileContents(file)
          }
        }
      } else {
        for (i = 0; i < ev.dataTransfer.files.length; i++) {
          //reader.fileName = ev.dataTransfer.files[i].name
          //reader.readAsText(ev.dataTransfer.files[i])
          this.getFileContents(ev.dataTransfer.files[i])
        }
      }
    },
    dragOverHandler: function (ev) {
      ev.preventDefault()
    },
    onDrop: function (e) {
      if (!this.connected) {
        this.showSnackbar('')
        return
      }
/*
      if (!(this.termStr && this.termStr.match(/.*(\$|#) $/i))) {

        this.showSnackbar("셸명령이 가능한 상태에서 파일 업로드가 가능합니다")
        return
      }
*/
      e = e || window.event
      e.preventDefault()

      if (e.dataTransfer.items) {
        for (let index = 0; index < e.dataTransfer.items.length; index++) {
          if (e.dataTransfer.items[index].kind === 'file') {
            this.sendFile(e.dataTransfer.items[index].getAsFile())
          }
        }
      } else {
        for (let index = 0; index < e.dataTransfer.files.length; index++) {
          this.sendFile(e.dataTransfer.files[index])
        }
      }
    },
    onDragOver: (e) => {
      e.preventDefault()
    },
    getContents: function(path) {
      axios.get(path, {headers: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'}})
        .then((res) => {
          this.contents = res.data
        })
        .catch((err) => {
          console.log(err)
          this.contents = err
        })
    },
    toggleTermScreen: function() {
      const monaco = document.getElementById('monaco')

      this.fullTerminal=!this.fullTerminal
      if (!this.fullTerminal) {
        monaco.style.height = this.befHeight
      }

      if (this.befHeight !== 0)
        this.befHeight = monaco.style.height
      this.fitSize()
    },
    shareSource: function() {
      const source = this.editor.getValue()
      if (source === "") {
        this.messageBox('nosource', 320)
        return
      }

      axios.post(`/shareMySource`, {
          params: {
            source: source,
            language: this.languages[this.selectedLanguage].template,
          }
        })
        .then((res) => {
          this.sharedHash = res.data

          if (this.sharedHash !== '') {
            this.sharedURL = `${window.location.protocol}//${window.location.host}/pages/shared/${this.languages[this.selectedLanguage].template}/${this.sharedHash}.template`
            this.copyToClipboard(this.sharedURL)
            this.messageBox('shared', 400)
            qrcode.toDataURL(this.sharedURL, (err, url) => {
              this.QRCode = url
            })
          } else {
            this.showSnackbar(this.$t('sourceSharingFailed'))
            console.error('sharedHash is null')
          }
        })
        .catch((e) => {
          this.showSnackbar(this.$t('sourceSharingFailed'))
          console.error(e)
        })
    },
    openSite: function(site) {
      window.open(site, "_blank")
    },
    renderMarkdown: function(markdown) {
      const con_html = document.getElementById('con-html')

      const hljs = require('highlight.js')
          const md = require('markdown-it')({
              highlight: (str, lang) => {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return '<pre class="hljs">' +
                          hljs.highlight(str, {language: lang}, true).value +
                        '</pre>';
                } catch (e) {console.error(e.message)}
              }

              return '<pre class="hljs">' + md.utils.escapeHtml(str) + '</pre>';
            }
          })
          con_html.innerHTML = `<div class='markdown-body'>${md.render(markdown)}</div>`
          con_html.style.overflowY = 'auto'
    },
    resizeTermScreen: function(isUp) {
      // const appBar = document.getElementById('app-bar')
      // const toolbar = document.getElementById('v-toolbar')
      const monaco = document.getElementById('monaco')
      if (!monaco)
        return
      let dy = monaco.clientHeight

      const px = parseInt(document.body.clientHeight*0.1)

      dy += isUp?px:-px
      monaco.style.height = `${dy}px`

      if (this.befHeight !== 0)
        this.befHeight = monaco.style.height
      this.fitSize()
    },
    /*
    getTemplate: function(ext) {
      axios.get(`/contents/templates/${ext}.template`, {headers: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'}})
        .then((res) => {
          this.editor.setValue(res.data)
        })
        .catch(() => {
          console.log(`${ext} template does not exist`)
        })
    },
    */
    messageBox: function(id, width) {
      if (id == 'help') {
        const path = `/contents/help_${this.locale}.md`
        this.getContents(path)
      } else if (id == 'about') {
        const path = `/contents/about.md`
        this.getContents(path)
      } 

      this.$refs[id].show(width)
    },
    showLanguageList: function() {
      this.$refs["languageList"].show()
    },
    imshow: function(data) {
      const split = data.split(':')
      const filename = atob(split[0].split(';')[1])
      const ext = filename?filename.toLowerCase().split('.').pop():'png'
      const con_html = document.getElementById('con-html')

      if(filename.startsWith('code|')) {
        //console.log(Buffer.from(decodeURI(split[1]), "base64").toString())
        this.addTab(filename.split('|')[1], Buffer.from(decodeURI(split[1]), "base64").toString())
        return
      }

      this.terminalTab = 'tab-2'

      if (ext === 'html' || ext === 'php') {
        con_html.innerHTML = "<iframe id='iframe-html' frameborder='0' width='100%' height='100%' style='background:white;overflow-y:scroll; overflow-x:hidden;'></iframe>"
        const iframe = document.getElementById('iframe-html')
        con_html.style.overflowY = 'hidden'
        let src = Buffer.from(decodeURI(split[1]), "base64").toString()
        if (!src.match(/html/i)) {
          const style = "<style>" +
"table { border-collapse: collapse; border-spacing: 0; border: 0;}" +
"tr th {background: #e9efff; font-weight: bold;padding: 5px 20px;}" +
"tr th span { padding-right: 20px;background-repeat: no-repeat;background-position: 100% 100%;}" +
"tr {color: #555;}" +
"tr td {text-align: center;padding: 5px 20px;}" +
"tr, th, td {margin: 0;padding: 0;border: 1; border-color:#e5e5f5;font-size: 100%;font: inherit;vertical-align: baseline;outline: none;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}" +
"th:first-child, table td:first-child {border-left: 0;}" +
"th:last-child,table td:last-child {border-right: 0;}" +
"</style>"
          src = `<html><head>${style}</head><body>${src}</body></html>`
        }
        iframe.srcdoc = src
      } else if (ext === 'md') {
        const src = Buffer.from(decodeURI(split[1]), "base64").toString()
        this.renderMarkdown(src)
      } else if (ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'gif' || ext === 'svg') {
        const terminal = document.getElementById('terminal')
        const src = `data:image/${ ext === 'svg'?'svg+xml':ext};base64,${decodeURI(split[1])}`
        const div = con_html.appendChild(document.createElement('div'))
        //div.appendChild(document.createElement('hr'))
        const img = div.appendChild(document.createElement('img'))
        img.style = `max-height:${(terminal.clientHeight === 0 ? con_html.clientHeight-20:terminal.clientHeight-20)}px`
        img.type ="application/pdf"
        img.src = src
        const p = div.appendChild(document.createElement('p'))
        p.style = "color:grey; margin:0 0 0 0px;"
        p.appendChild(document.createTextNode(filename))
        con_html.style.overflowY = 'auto'

        window.setTimeout(() => {
          if (con_html.scrollHeight > 0)
            con_html.scrollTop = con_html.scrollHeight - con_html.clientHeight
        }, 100)
      } else if (ext === 'pdf') {
        const src = `data:application/pdf;base64,${decodeURI(split[1])}`

        con_html.innerHTML = `<embed src="${src}" type="application/pdf" style="width:100%;height:100%;"></embeded>`
        con_html.style.overflowY = 'hidden'
      } else {
        const div = con_html.appendChild(document.createElement('div'))
        const link = document.createElement('a')
        link.download = filename
        link.text = `${filename} ${this.$t('download')}`
        link.href = `data:;base64,${decodeURI(split[1])}`
        div.appendChild(link)
        con_html.style.overflowY = 'auto'
      }
      this.ws.send('1\n')
    },
    decoration: function(data) {
      const errorRegEx = this.languages[this.selectedLanguage].errorRegEx
      // console.log(this.selectedLanguage, errorRegEx)
      if (!errorRegEx)
        return

      const regexp = new RegExp(errorRegEx, "g")
      const ansi = "[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]"
      const ansiRegEx = new RegExp(ansi, "g")
      let match = null

      // console.log(regexp, data)
      while ((match = regexp.exec(data)) !== null) {
        if (match.length >= 2) {
          const row = parseInt(match[1])
          const matched = match[0]
          //console.log(matched)
          this.decorations.push({
            range: new monaco.Range(row,1,row,1),
            options: {
              isWholeLine: true,
              className: this.$vuetify.theme.dark ? 'decorationErrorLineDark':'decorationErrorLine',
              glyphMarginClassName: 'decorationError',
              hoverMessage: {value: "```json\n" + matched.replace(ansiRegEx, "") + "\n```"},
              glyphMarginHoverMessage: {value: "```json\n" + matched.replace(ansiRegEx, "") + "\n```"},
              minimap:{ position:1 }
            }
          })

          // console.log( this.decorations)
          this.befDecorations = this.editor.deltaDecorations(this.befDecorations, this.decorations)
          this.editor.revealLineInCenter(row)
          this.editor.setPosition({column: 0, lineNumber: row})
        }
      }
    },
    connect: function(callback) {
      const vm = this

      if (vm.connected) {
        return
      }

      this.terminalTab = "tab-0"
//      vm.disconnect()

      const term = vm.term
      //const reset = '\x1bc\x1b[!p\x1b[?3;4l\x1b[4l\x1b>'

      //term.write(reset)
      term.clear()
      term.write(this.$t('connectToServer'))
      let host;
      console.log(window.location.host)
      if (/^192\.168\./.test(window.location.host))
        host = 'ws://' + window.location.host.replace(':8081', ':5000')
      else
        host = 'wss://' + window.location.host
      const ws = new WebSocket(`${host}/terminal?dockerImage=${this.languages[this.selectedLanguage].dockerImage}`)
      //const ws = new WebSocket(`wss://www.ryugod.com/terminal?dockerImage=${this.languages[this.selectedLanguage].dockerImage}`)

      ws.onopen = () => {
        term.write(this.$t('connected'))
        term.write(this.$t('pleaseWait'))
        vm.ws = ws
        vm.connected = true
        ws.send(`2 ${term.cols} ${term.rows}`)

        if (typeof callback === 'function')
          callback()
      }

      const BEL = '\x07'
      const HEREDOC_BEGIN = "cat << 'RYUGOD_EOF'"
      const regex = /RYUGOD_EOF(?!')/
      const esc1337 = '\x1b[1337';
      let isContImage = false
      let isHereDoc = false
      let imgData = '';

      ws.onmessage = (d) => {
        const data = d.data.substring(1)

        //console.log(`|${data}|`, regex.exec(data))
        if (isHereDoc) {
          if (regex.exec(data) !== null) {
            isHereDoc = false
            const last = data.toString().split(regex)
            if (last[1]) {
              vm.termStr = last[1]
              term.write(last[1])
            }
          }
          return
        } else if (isContImage) {
          imgData += data

          if (data.indexOf(BEL) !== -1) {
            isContImage = false
            const last = imgData.toString().split(BEL)
            vm.imshow(last[0])
            imgData = ''
            if (last[1]) {
              vm.termStr = last[1]
              term.write(last[1])
            }
          }
          return
        }

        if (data.indexOf(HEREDOC_BEGIN) !== -1) {
          if (regex.exec(data) === null) {            
            isHereDoc = true
            term.write(this.$t('uploadingFile'))
          }
          return
        } else if (data.substring(0, 6) === esc1337) {
          if (data.indexOf(BEL) === -1) {
            imgData = data
            isContImage = true
          } else
            vm.imshow(data)
          return
        }

        switch(d.data[0]) {
        case '1':
          vm.termStr = data.substr(-10)
          term.write(data)

          this.decoration(data)

          break
        case '2':
          vm.count = data
          break
        }
      }

      ws.onerror = function(ev) {
        console.log(ev)
        term.write(ev)
        //vm.term = null
      }

      ws.onclose = () => {
        vm.term.write(`\r\n${this.$t('disconnected')}⚡\r\n\r\n`)
        vm.ws = null
        vm.connected = false
        this.count = null
      }
    },
    disconnect: function() {
      if (this.ws) {
        this.ws.close()
      }
      //this.term = null
      this.connected = false
    },
    executeCheck: function(command) {
      if (command) {
        this.execute(this, command)
      }

      if (!this.languages[this.selectedLanguage].comand) {
        this.execute(this)
        return
      }
      if (!this.connected) {
        this.connect(() => {this.executeCheck()})
        return
      }
      this.execute(this, command)
    },
    execute: function(isAll, command) {
      /*if (this.editor.getValue().trim() === "") {
        this.showSnackbar("소스가 비어 있습니다")
        return
      }*/

      this.decorations = []
      this.befDecorations = this.editor.deltaDecorations(this.befDecorations, [])

      if (this.selectedLanguage === 'HTML5' ||
          this.selectedLanguage === 'Markdown' ||
          this.selectedLanguage === 'JQuery' ||
          this.selectedLanguage === 'AngularJS' ||
          this.selectedLanguage === 'React.js' ||
          this.selectedLanguage === 'Vue.js') {
        const con_html = document.getElementById('con-html')

        if (this.selectedLanguage === 'Markdown') {
          this.renderMarkdown(this.editor.getValue())
        } else {
          con_html.innerHTML = "<iframe id='iframe-html' frameborder='0' width='100%' height='100%' style='background:white;overflow-y:scroll; overflow-x:hidden;'></iframe>"
          const iframe = document.getElementById('iframe-html')
          iframe.srcdoc = this.editor.getValue()
          con_html.style.overflowY = 'hidden'
        }

        this.terminalTab = 'tab-2'
        return
      }

      if (!this.connected) {
        this.connect(() => {this.execute(isAll, command)})
        return
      }
      const selected = this.editor.getSelection()
      const selectedText = command?command:this.editor.getModel().getValueInRange(selected)

      this.terminalTab = 'tab-0'
      if (!command) {
        if (isAll) {
          const ext = this.languages[this.selectedLanguage].ext
          let args = this.options[`${this.languages[this.selectedLanguage].template}.args`]

          if (!args)
            args = this.languages[this.selectedLanguage].args?this.languages[this.selectedLanguage].args:""

          command = (" stty -echo\n cat <<- 'RYUGOD_EOF' > {FILENAME}.{EXT}\n{SOURCE}\nRYUGOD_EOF\n clear;stty echo\n" +
            this.languages[this.selectedLanguage].command)
            .replace(/{ARGS}/g, args)
            .replace(/{FILENAME}/g, this.filename.replace(`.${ext}`, ''))
            .replace(/{EXT}/g, ext)
            .replace('{SOURCE}', this.editor.getValue().replaceAll('$','$$$$'))
//            .replace(/\t/g, '    ')
          if (this.inputValue)
            command += `\n${this.inputValue}\n`
        }
        else if (selectedText) {
          command = selectedText
        }
        else {
          if (selected['startLineNumber']) {
            command = this.editor.getModel().getLineContent(selected['startLineNumber'])
            this.editor.setPosition({column: 0, lineNumber: selected['startLineNumber']+1})
          }
        }
      }

      if (this.connected) {
        this.term.scrollToBottom()
        //this.ws.send("1\r\x03") // send Ctrl+C
        this.ws.send(`1${command}\r`)
      } else
        this.term.write(`${this.t('connectFirst')}.\r\n`)
    },
    fitSize: function() {
      // const appBar = document.getElementById('app-bar')
      const toolbar = document.getElementById('v-toolbar')
      const fileTabs = document.getElementById('file-tabs')
      const footer = document.getElementById('v-footer')
      const monaco = document.getElementById('monaco')
      const terminal = document.getElementById('terminal')
      const con_terminal = document.getElementById('con-terminal')
      const con_image = document.getElementById('con-html')
      const resizer = document.getElementById('resizer')
      // const toolbarHeight = monaco.parentElement.clientHeight - monaco.clientHeight
      //const conTerminal = document.getElementById('con-terminal')
      const padding = con_terminal.clientHeight - terminal.clientHeight + resizer.clientHeight
      // const height = window.innerHeight - appBar.clientHeight - toolbar.clientHeight - fileTabs.clientHeight - footer.clientHeight
      const height = window.innerHeight - toolbar.clientHeight - fileTabs.clientHeight - footer.clientHeight
      let monacoHeight = (!this.fullTerminal && monaco.style.height === '0px') || monaco.style.height === '' ?parseInt(window.innerHeight*0.6):monaco.clientHeight

      if (window.innerHeight*0.7 < monacoHeight) {
        monacoHeight = parseInt(window.innerHeight*0.7)
        this.befHeight = monaco.style.height
      } else if (!this.fullTerminal && monacoHeight < 80) {
        //monacoHeight = 10
        monacoHeight = 80
      }

      monaco.style.height = this.fullTerminal?'0px':`${monacoHeight}px`
      terminal.style.height = this.fullTerminal?`${height-padding}px`:`${height-monacoHeight-padding}px`
      if (con_image) con_image.style.height = this.fullTerminal?`${height}px`:`${height-monacoHeight-resizer.clientHeight}px`
      this.editor.layout()

      try {
        this.fitAddon.fit()
      } catch(e) {
        //console.log(e)
      }
    },
    removeImages: function() {
      const con_image = document.getElementById('con-html')

      con_image.innerHTML = ""
    },
/*
    editorWillMount: function(monaco) {
      console.log('Melong', monaco.editor)
    },
*/
    navigate: function(language) {
      this.onChangeLanguage(language)
    },
    onChangeLanguage: function(language, isFirst) {
      if (!this.languages[language])
        return

      if (this.selectedLanguage != language)
        this.sourceControl('tabs', language)
      this.disconnect()
      this.inputValue = ""
      this.languageFilter = language
      this.defaultFilename = this.languages[language].defaultFilename?this.languages[language].defaultFilename:"main"
      this.languageIcon = this.languages[language].icon
      this.selectedLanguage = language
      this.filename = this.defaultFilename
      this.befFileTab = this.defaultFilename
      document.title = `RyuGod - ${language}`
      document.querySelector('meta[name="description"]').setAttribute("content", `온라인 ${language} 실행 환경 (Online ${language} Test and Run with IDE)`);
      this.editor.setScrollLeft(0)
      this.editor.setScrollTop(0)
      this.removeImages()
      monaco.editor.setModelLanguage(this.editor.getModel(), this.languages[language].highlighting)
      this.editor.getModel().updateOptions({insertSpaces:this.languages[language].insertSpaces === false ? false:true})
      this.editor.getModel().updateOptions({tabSize:this.languages[this.selectedLanguage].tabSize?this.languages[this.selectedLanguage].tabSize:this.options['tabSize']})
      const pathTo = '/pages/ide/' + this.languages[language].template

      if ((!window.location.pathname.endsWith('.template') &&
           !window.location.pathname.startsWith('/pages/shared') &&
            window.location.pathname.indexOf('source:') === -1) || !isFirst)
        pathTo !== window.location.pathname && this.$router.push(pathTo)

      this.$emit("navigate", this.languages[language].template)
    },
    saveAs: function() {
      const text = this.editor.getValue()

      const pom = document.createElement('a')
      pom.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(text))
      pom.setAttribute('download', `${this.filename}.${this.languages[this.selectedLanguage].ext}`)
      pom.style.display = 'none'
      document.body.appendChild(pom)

      pom.click()

      document.body.removeChild(pom)
    },
  },
/*
  computed: {
    filteredLanguages: function () {
      console.log('filter:', this.filter)
      if (this.filter.length === 0) {
        return Object.keys(this.languages)
      }
      return Object.keys(this.languages.filter(this.filter))
    }
  },
*/
  mounted: function() {
    this.locale = navigator.language === 'ko' ?  'ko':'en'
    this.$i18n.locale = navigator.language === 'ko' ?  'ko':'en'
    this.tabMenu = [
      {id: 'close', icon: 'mdi-close', title: this.$t('closeTab')},
      {id: 'new', icon: 'mdi-plus', title: this.$t('newTab')},
      {id: 'rename', icon: 'mdi-square-edit-outline', title: this.$t('rename')},
    ]

    const terminalContainer = document.getElementById('terminal')

    //this.term = new Terminal({theme:{foreground:'lime', background:'black'}, cursorBlink: true})
    this.term = new Terminal({
      cursorBlink: true,
      rows: 15,
      theme: {
        background: '#1e1e1e'
      },
    })

    //terminalContainer.innerHTML = '<div style="color:lime;">⚡ Disconnected</div>';
    this.term.loadAddon(this.fitAddon)
    this.term.open(terminalContainer)

    this.term.onSelectionChange(() => {
      document.execCommand('copy');
    })

    this.term.onData((data) => {
      if (this.connected) {
        this.ws.send('1' + data)
      }
    })

    this.term.onResize(e => {
      if (this.connected) {
        this.ws.send(`2 ${e.cols} ${e.rows}`)
      }
    })

    const banner = this.$t('banner').replaceAll('ANSI', '\x1b[')
/*
" ____               ____           _\r\n" +
"|  _ \\ _   _ _   _ / ___| ___   __| |\r\n" +
"| |_) | | | | | | | |  _ / _ \\ / _` |\r\n" +
"|  _ <| |_| | |_| | |_| | (_) | (_| |\r\n" +
"|_| \\_\\\\__, |\\__,_|\\____|\\___/ \\__,_|\r\n" +
"       |___/\r\n"
*/
    this.term.write(banner)

    window.addEventListener('resize', this.fitSize);
/*
    self.MonacoEnvironment = {
      getWorker: function (moduleId, label) {
        if (label === 'html') {
          return new HTMLWorker()
        }
        if (label === 'javascript' || label === 'typescript') {
          return new TypeScriptWorker()
        }
        return new EditorSimpleWorker()

      }
    }
*/
    const divMonaco = document.getElementById("monaco")
    divMonaco.style.height = `${parseInt(window.innerHeight * 0.6)}px`

    this.editor = monaco.editor.create(divMonaco, {
      value: "",
      tabSize: 4,
      language: "shell",
      quickSuggestions: {
        "other": true,
        "comments": false,
        "strings": true,
        "keywords": true,
      },
      lineNumbers: "on",
      automaticLayout: true,
      roundedSelection: false,
      scrollBeyondLastLine: true,
      readOnly: false,
      theme: "vs-dark",
      glyphMargin: true,
    })

    this.editor.addAction({
      id: 'sendToTerminal',
      label: this.$t('sendToTerminal'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
      ],
      run: () => {
        this.execute()
      }
    })

    this.editor.addAction({
      id: 'nextLanguage',
      label: this.$t('nextLanguage'),
      keybindings: [
        monaco.KeyCode.F2,
      ],
      run: () => {
        var keys = Object.keys(this.languages);
        var index = keys.indexOf(this.selectedLanguage) + 1;

        if (keys.length <= index)
          index = 0

        this.onChangeLanguage(keys[index])
      }
    })

    this.editor.addAction({
      id: 'prevLanguage',
      label: this.$t('prevLanguage'),
      keybindings: [
        monaco.KeyMod.Shift | monaco.KeyCode.F2,
      ],
      run: () => {
        var keys = Object.keys(this.languages);
        var index = keys.indexOf(this.selectedLanguage) - 1;

        if (0 > index)
          index = keys.length-1

        this.onChangeLanguage(keys[index])
      }
    })

    this.editor.addAction({
      id: 'execute',
      label: this.$t('run'),
      keybindings: [
        monaco.KeyCode.F9,
      ],
      run: () => {
        this.executeCheck()
      }
    })

    this.editor.addAction({
      id: 'connect',
      label: this.$t('connect'),
      run: () => {
        this.connect()
      }
    })

    this.editor.addAction({
      id: 'disconnect',
      label: this.$t('disconnect'),
      run: () => {
        this.disconnect()
      }
    })

    this.editor.addAction({
      id: 'repl',
      label: this.$t('repl'),
      run: () => {
        let args = this.options[`${this.languages[this.selectedLanguage].template}.args`]

        if (!args)
          args = this.languages[this.selectedLanguage].args?this.languages[this.selectedLanguage].args:""

        this.languages[this.selectedLanguage].cli &&
          this.execute(false, this.languages[this.selectedLanguage].cli.replace(/{ARGS}/g, args))
      }
    })

    this.editor.addAction({
      id: 'columnMode',
      label: this.$t('columnMode'),
      keybindings: [
        monaco.KeyMod.Alt | monaco.KeyCode.KEY_C,
      ],
      run: () => {
        const mode = this.editor.getOption(monaco.editor.EditorOption.columnSelection)
        this.editor.updateOptions({columnSelection: !mode})
        this.editor.setSelection(this.editor.getSelection())
      }
    })

    this.editor.addAction({
      id: 'save',
      label: this.$t('save'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
      ],
      run: () => {
        this.sourceControl('save', this.selectedLanguage)
      }
    })

    this.editor.addAction({
      id: 'load',
      label: this.$t('load'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_L,
      ],
      run: () => {
        this.sourceControl('open', this.selectedLanguage)
      }
    })

    this.editor.addAction({
      id: 'import',
      label: this.$t('import'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_O,
      ],
      run: () => {
        this.importFile()
      }
    })

    this.editor.addAction({
      id: 'export',
      label: this.$t('export'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_E,
      ],
      run: () => {
        //this.sourceControl(true, this.selectedLanguage)
        this.saveAs()
      }
    })

    this.editor.addAction({
      id: 'quickCommand',
      label: this.$t('commandPalette'),
      keybindings: [
        monaco.KeyCode.F1,
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_P,
      ],
      run: () => {
        this.editor.trigger('F1', 'editor.action.quickCommand')
      }
    })

    this.editor.addAction({
      id: 'showLanguageList',
      label: this.$t('commandPalette'),
      keybindings: [
        monaco.KeyCode.F4,
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KEY_S,
      ],
      run: () => {
        this.showLanguageList()
      }
    })

    this.editor.addAction({
      id: 'saveOptions',
      label: this.$t('saveOptions'),
      run: () => {
        this.saveOptions()
      }
    })

    this.editor.addAction({
      id: 'shareSource',
      label: this.$t('shareSource'),
      run: () => {
        this.shareSource()
      }
    })

    this.editor.addAction({
      id: 'newTab',
      label: this.$t('newTab'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.N,
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.T,
      ],
      run: () => {
        this.newTab()
      }
    })

    this.editor.addAction({
      id: 'closeTab',
      label: this.$t('closeTab'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.F4,
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.F4,
      ],
      run: () => {
        this.closeTab()
      }
    })

    this.editor.addAction({
      id: 'prevTab',
      label: this.$t('prevTab'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Tab,
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.PageUp,
      ],
      run: () => {
        this.fileTabIndex = this.fileTabIndex === 0 ? this.fileTabs.length-1 : this.fileTabIndex-1
        this.onChangeFileTab(this.fileTabIndex)
      }
    })

    this.editor.addAction({
      id: 'copySourceHref',
      label: this.$t('copySourceHref'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.C
      ],
      run: () => {
        const base_url = window.location.href.split('/').slice(0, 6).join('/')
        const url = `${base_url}/source:${Buffer.from(pako.deflate(this.editor.getValue())).toString('base64').replace(/\//g, "_")}`
        if (url.length > 15000)
          this.showSnackbar(this.t('exceedSourceSize'))
        else {
          this.copyToClipboard(`<a href="${url}" target="_blank">🚀 ${this.t('runSource')}</a>`)
          this.showSnackbar(this.t('hyperlinkCopied'))
        }
      }
    })

    this.editor.addAction({
      id: 'copySourceUrl',
      label: this.$t('copySourceUrl'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Insert
      ],
      run: () => {
        const selected = this.editor.getSelection()
        const selectedText = this.editor.getModel().getValueInRange(selected)
        const source = selectedText ? selectedText:this.editor.getValue()
        const base_url = window.location.href.split('/').slice(0, 6).join('/')
        const url = `${base_url}/source:${Buffer.from(pako.deflate(source)).toString('base64').replace(/\//g, "_")}`
        
        if (url.length > 15000)
          this.showSnackbar(this.t('exceedSourceSize'))
        else {
          this.copyToClipboard(url)
        }
      }
    })

    this.editor.addAction({
      id: 'nextTab',
      label: this.$t('nextTab'),
      keybindings: [
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.Tab,
        monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.PageDown,
      ],
      run: () => {
        this.fileTabIndex = this.fileTabs.length === this.fileTabIndex + 1 ? 0 : this.fileTabIndex+1
        this.onChangeFileTab(this.fileTabIndex)
      }
    })

    this.editor.addAction({
      id: 'toggleTheme',
      label: this.$t('toggleTheme'),
      run: () => {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      }
    })

    this.editor.addAction({
      id: 'selectLanguageList',
      label: this.$t('selectLanguageList'),
      run: () => {
        this.$refs.langList.$el.click()
      }
    })

    this.editor.addAction({
      id: 'options',
      label: this.$t('options'),
      run: () => {
        this.showSettingsDialog()
      }
    })

    for (const language in this.languages) {
      this.editor.addAction({
        id: `${this.languages[language].template}`,
        label: `${this.$t('selectLanguage')}: ${language} - ${this.languages[language].kor}`,
        run: () => {
          this.onChangeLanguage(language)
        },
        keybindings: [this.languages[language].keyBindings]
      })
    }

    this.editor.focus()

    const resizer = document.getElementById('resizer')
    const topSide = resizer.previousElementSibling
    const bottomSide = resizer.nextElementSibling
    // The current position of mouse
    // let prevSibling = resizer.previousElementSibling
    // let prevSiblingHeight = 0

    const mouseUpHandler = () => {
      const resizer = document.getElementById('resizer')
      resizer.style.removeProperty('cursor');
      document.body.style.removeProperty('cursor');

      topSide.style.removeProperty('user-select');
      topSide.style.removeProperty('pointer-events');
      bottomSide.style.removeProperty('user-select');
      bottomSide.style.removeProperty('pointer-events');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      this.fitSize()
    }
    const mouseMoveHandler = (e) => {
      // const appBar = document.getElementById('app-bar')
      const toolbar = document.getElementById('v-toolbar')
      const fileTabs = document.getElementById('file-tabs')
      const resizer = document.getElementById('resizer')
      // let dy = e.clientY - appBar.clientHeight - toolbar.clientHeight - fileTabs.clientHeight;
      let dy = e.clientY - toolbar.clientHeight - fileTabs.clientHeight;
      //const h = (prevSiblingHeight + dy) * 100 / resizer.parentNode.getBoundingClientRect().height;
      const monaco = document.getElementById('monaco')

      if (document.body.clientHeight*0.8 < dy) {
        dy = parseInt(document.body.clientHeight*0.8)
      }

      //this.prevSibling.style.height = `${h}%`
      monaco.style.height = `${dy}px`
      resizer.style.cursor = 'row-resize'
      document.body.style.cursor = 'row-resize'
      topSide.style.userSelect = 'none'
      topSide.style.pointerEvents = 'none'
      bottomSide.style.userSelect = 'none'
      bottomSide.style.pointerEvents = 'none'
      this.befHeight = monaco.style.height
    }
    const mouseDownHandler = function() {
//      const resizer = document.getElementById('resizer')
//      const rect = prevSibling.getBoundingClientRect();
//      prevSiblingHeight = rect.height;

      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    }

    // Attach the handler
    resizer.addEventListener('mousedown', mouseDownHandler)
    this.optionControl('load')

    window.onbeforeunload = () => {
      return "{{$t('terminate')}}"
    }

    window.onload = () => {this.fitSize()}
  },
  created: function() {
    this.languages = languages
  }
};
</script>

<style>
.v-input {
  font-size: 12px;
}
.client {
  width: 100%;
  top: 10px;
  bottom: 10px;
}
/*
.xterm-viewport {
  overflow: hidden !important;
}
*/
.parent {
   width: 42px; /* I took the width from your post and placed it in css */
   height: 42px;
}

.con-bottom {
  width:100%;
  top: 10px;
  bottom: 10px;
  padding:10px;
  background-color: #1e1e1e;
  overflow: auto;
  max-height: 100%;
}
.con-html {
  width:100%;
  top: 10px;
  bottom: 10px;
  padding:10px;
  background-color: grey darken-4;
  overflow: auto;
  max-height: 100%;
}
.con-html img {
  max-height: 100%;
}
.label {
  display: inline-block;
  width: 100px;
  margin-right: 20px;
  user-select: none;
  text-align: left;
}
.resizer {
  height: 3px;
  cursor: row-resize;
  background-color:dimgray
}
.resizer:hover {
  background-color:#0D47A1
}
.v-autocomplete__content .v-list__tile{
  height: 20px;
}
.decorationError {
  background: rgba(255, 0, 0, 0.5);
}
.decorationErrorLine {
  background: rgba(255, 220, 220, 0.2);
}
.decorationErrorLineDark {
  background: rgba(70, 40, 40, 0.2);
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-button {
    width: 8px;
    height:5px;
}
::-webkit-scrollbar-track {
    background:#1e1e1e;
    border: thin solid #303030;
    border-radius:10px;
}
::-webkit-scrollbar-thumb {
    background:#999;
    border: thin solid gray;
    border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {
    background:#7d7d7d;
}        
</style>