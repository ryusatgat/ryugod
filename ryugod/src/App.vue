<template>
    <v-app>
    <!--
    <app-bar id='app-bar' ref='appBar' @toggleMenu="toggleMenu" @navigate="navigate" @toggleTheme="toggleTheme">
    </app-bar>
    -->
    <v-main>
      <left-menu :menu="menu" ref=leftMenu @click="showContents"></left-menu>
      <!--
      <v-container min-width='640'>
      <v-row align-content='stretch' height='100%'>
        <v-col width='100%'>          
        </v-col>
      </v-row>
      </v-container>
      <terminal ref=terminal></terminal>

      <v-row>
      <v-col>
        <v-container>
          <div class="markdown-body" v-html='contents'></div>
        </v-container>
      </v-col>
      <v-col>
      -->
        <terminal
          :editorValue="editorValue"
          ref=terminal
          @navigate="navigate"
          @toggleMenu="toggleMenu"
          @onTerminalCount="onTerminalCount"
          :dark="$vuetify.theme.dark">
        </terminal>
<!--
      </v-col>
      </v-row>
-->
    </v-main>
  </v-app>
</template>

<style src='./styles/github-markdown.css'></style>
<style src='./styles/xterm.css'></style>
<style src='./styles/vs2015.css'></style>
<script>
const pako = require('pako')
//import AppBar from './components/AppBar'
import LeftMenu from './components/LeftMenu'
import Terminal from './components/Terminal'
import axios from 'axios'

export default {
  name: 'App',
  components: {
//    AppBar,
    LeftMenu,
    Terminal,
  },
  data: () => ({
    contents: "",
    editorValue: "",
    tab: 'tab-0',
    menu: {},
    termCount: null,
  }),
  methods: {
    toggleMenu: function() {
      this.$refs.leftMenu.visible = !this.$refs.leftMenu.visible
    },
/*
    toggleTheme: function() {
      //this.dark = !this.dark
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
*/
    showContents: function(path) {
      const source = path.split("/").pop()

      if (!(path.endsWith('.template') || path.endsWith('.md'))) {
        if (source.startsWith('source:')) {
          this.$refs.terminal.setEditorValue((new TextDecoder('utf-8')).decode(pako.inflate(Buffer.from(source.slice(7).replace(/_/g, "/"), 'base64'))))
        }
        return
      }

      axios.get(path, {headers: {'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'}})
        .then((res) => {
          this.$refs.leftMenu.selected = path
          if (path.endsWith('.template')) {
            this.$refs.terminal.setEditorValue(res && res.data && res.data.toString())

            if (source === "Hello, World!.template") {
              this.$refs.terminal.openLastSource()
            }
          } else {
            this.contents = res.data
          }
        })
        .catch((err) => {
          console.log(err)
//          this.contents = err
        })
    },
    onTerminalCount: function(count) {
      this.termCount = count
    },
    navigate: function(template) {
      let path_to = 'ide'
      const html = document.getElementsByTagName('html')[0]
      const event = new CustomEvent('scroll', {})
      html.pageYOffset = 0
      setTimeout(() => {
        html.scrollTop = 0
      })
      html.dispatchEvent(event)

      html.style.overflowY = 'hidden'

      path_to += `/${template}`
      
      const path = `/contents/${path_to}/`
      axios.get(path)
        .then((res) => {
          
          if (res.data) {
            this.menu = res.data
            
            //const pathname = window.location.pathname.split('/')
            if (!window.location.href.endsWith('.template') && 
                !window.location.href.split('/').pop().startsWith('source:')) {
              this.showContents(path + 'Hello, World!.template')
            }
          }
        })
        .catch((err) => {
          console.log(err)
          this.menu = err
        })
    },
  },
/*
  watch: {
    '$route' (to, from) {
      console.log(to, from)
    }
  },
*/
  mounted() {
    this.$i18n.locale = navigator.language.indexOf('ko') >= 0 ?  'ko':'en'
    //const def_path = '/contents/기본/0. 시작.md'
    const path = this.$route.params.app_path

    //this.showContents(def_path)

    if (path) {
      const contents = path.split('/')[0]
      if (contents)
        setTimeout(() => {this.showContents(`/contents/${path}`)}, 500)
    }
  }
};
</script>
