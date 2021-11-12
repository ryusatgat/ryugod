<template>
    <v-app-bar
      app
      height="32"
      :dark="dark"
    >
      <v-app-bar-nav-icon :dark="dark" @click="showMenu()"></v-app-bar-nav-icon>
      <template>
        <v-tabs 
          show-arrows
          v-model="active_tab"
          @change="navigate"
          @click="selectTab"
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="item in Object.keys(items)" :key='item'>{{item}}</v-tab>
        </v-tabs>
      </template>
      <v-icon dense color="grey">mdi-brightness-7</v-icon>
      <v-switch @change="toggleTheme" flat dense hide-details xs1></v-switch>
    </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  components: {
  },
  props: {
    dark: Boolean,
  },
  data: () => ({
    active_tab: 0,
    items: {'개발환경':0, '기본':1}
  }),
  methods: {
    showMenu: function() {
      this.$emit("toggleMenu")
    },
    navigate: function(n) {
      const key = Object.keys(this.items).find(key => this.items[key] === n)
      this.$emit("navigate", n, key)
    },
    toggleTerminal: function() {
      this.$emit("toggleTerminal")
    },
    toggleTheme: function() {
      this.$emit("toggleTheme")
    },
    selectTab: function(tab) {
      this.active_tab = this.items[tab]
      this.$emit("navigate", this.items[tab], tab)
    }
  },
  watch: {
    $route (to) {
      const path_to = decodeURI(to.path).split('/')[2]
      if (path_to) {
        this.active_tab = this.items[path_to]
        this.$emit("navigate", this.items[path_to], path_to)
      }
    }
  },
  created() {
    const def_path = '/contents/기본/0. 시작.md'
    const path = this.$route.params.app_path ? this.$route.params.app_path:def_path
    if (path) {
      const contents = path.split('/')[0]      
      if (contents && this.items[contents] !== 0) {
        this.selectTab(contents)
      }
    }
  }
}
</script>

<style>
.label {
  display: inline-block;
  margin-right: 100px;
  user-select: none;
  text-align: left;
}
</style>