<template>
  <v-navigation-drawer
    v-model="visible"
    app
    width="320"
    :dark="dark"
  >
    <template v-slot:prepend>
      <v-list-item two-line link>
        <v-list-item-avatar>
          <img src="/contents/images/ryugod.png">          
        </v-list-item-avatar>
        <v-list-item-content>
        <v-list-item-title @click="aboutMsg()">{{$t('app-title')}}</v-list-item-title>
        <v-list-item-subtitle @click="aboutMsg()">{{$t('ryugod')}}</v-list-item-subtitle>
        </v-list-item-content>   
      </v-list-item>
    </template>

    <div v-for="submenu in menu.list" :key="submenu.name">
      <v-list dense v-if="submenu.type == 'd'" class="overflow-y-auto">
        <v-list-group
          :value="true"
          :prepend-icon="submenu.type == 'f'?'mdi-file-document-outline':'mdi-folder'"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="submenu.name"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            link
            v-for="subtitle in submenu.list"
            :key="subtitle"
            :to="{path: `${menu.path.replace(/^\/contents/, '/pages')}${submenu.name}/${subtitle}`}"
          >          
          <!--            @click='onMenuClick(`${menu.path}/${submenu.name}`, subtitle)' -->
            <v-list-item-content>
              <v-list-item-title v-text='subtitle.replace(/(.md|.template)/, "")'></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon v-if="selected === `${menu.path}${submenu.name}/${subtitle}`">mdi-emoticon-happy-outline</v-icon>
            </v-list-item-icon>          
          </v-list-item>
        </v-list-group>
      </v-list>
      <v-list dense v-else>
        <v-list-item 
          link 
          :to="{path: `${menu.path.replace(/^\/contents/, '/pages')}${submenu.name}`}"
        >
          <v-list-item-icon>
          <v-icon>
            mdi-file-document-outline
          </v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text='submenu.name.replace(/(.md|.template)/, "")'></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon v-if="selected == `${menu.path}${submenu.name}`">mdi-emoticon-happy-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </div>    
    <div>
      <ShowMessage ref="about" title="About ryugod.com"><div class="markdown-body" v-html="contents"></div></ShowMessage>
    </div>
  </v-navigation-drawer>
</template>

<script>
import axios from 'axios'
import ShowMessage from './ShowMessage'

export default {
  name: 'LeftMenu',
  components: {
    ShowMessage
  },
  methods: {
    aboutMsg: function() {
      const path = `/contents/about.md`
      this.getContents(path)
      this.$refs['about'].show(800)
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
  },
  props: {
    menu: Object,
    dark: Boolean,
  },
  data() {
    return {
      msg: true,
      visible: true,
      selected: null,
      contents: "",
      about: false,
    }
  },
  watch: {
    $route (to) {
      const path_to = decodeURI(to.path.replace(/^\/pages/, '/contents'))
      if (path_to) {
        this.selected = path_to
        this.$emit("click", path_to)
      }
    }
  },  
  mounted() {
  },
  created() {
    //const def_path = '/contents/기본/0. 시작.md'
    const path = this.$route.params.app_path

    if (path) {
      const contents = path.split('/')[0]
      if (contents) {
        this.selected = `/contents/${path}`
      }
    } else {
      //this.selected = def_path
      this.visible = false
    }
  }
};
</script>

<style>
a {text-decoration: none;}
</style>