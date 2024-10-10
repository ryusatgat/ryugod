<template>
  <v-dialog
    v-model="dialog"
    scrollable
    fullscreen
    @keydown.esc="dialog=false"
  >
    <v-card dense>
      <v-card-title class="blue-grey darken-1">{{$t('selectLanguage')}}
        <div class="text-subtitle-2">
          ({{tableItems.length}})
        </div>
        <v-spacer></v-spacer>
        <v-text-field
          ref="filter"
          v-model="filter"
          label="Filter"
          solo dense
          hide-details
          clearable
        ></v-text-field>        
        <v-spacer></v-spacer>
        <v-btn color="error" icon @click='dialog=false'><v-icon>mdi-close-box</v-icon></v-btn>
      </v-card-title>
      <v-card-text>
      <v-row no-gutters>
        <v-col
          v-for="(item, index) in tableItems"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="hover-card" style="width: 400px">
            <v-row no-gutters>
              <v-col class="pa-4">
                <v-div @click="onClick(item.language)" style="display: block; cursor: pointer;">
                <v-icon color="primary" class="mr-2">{{ item.icon }}</v-icon>
                {{ item.language }}
                </v-div>
                <v-div>
                  <v-icon v-if="item.homepage" color="grey" style="cursor: pointer;" @click="openSite(item.homepage)">mdi-home</v-icon>
                  <v-icon v-if="item.repo" color="grey" style="cursor: pointer;" @click="openSite(item.repo)">mdi-github</v-icon>
                </v-div>
              </v-col>
              <v-col class="align-self-left grey--text text-caption" style="cursor: pointer;"> {{ item.desc }} </v-col>
            </v-row>
          </v-card>
          <v-spacer style="height: 5px;"></v-spacer>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</v-dialog>
</template>
  
<script>
  import {languages} from './languages.js'
  export default {
    data() {
      return {
        filter: '',
        languages: null,
        dialog: false,
      }
    },
    computed: {
      tableItems() {
        const filter = this.filter ? this.filter.toLowerCase():"";

        return Object.keys(this.languages).map(key => ({
          language: key,
          icon: this.languages[key].icon,
          desc: this.languages[key].desc,
          homepage: this.languages[key].homepage,
          repo: this.languages[key].repo,
          kor: this.languages[key].kor
        })).filter(item =>
          item.language.toLowerCase().includes(filter) ||
          item.desc.toLowerCase().includes(filter) ||
          item.kor.toLowerCase().includes(filter)
        );
      },
    },
    methods: {
      show(width) {
        this.dialog = true
        if (width) {
          this.width = width
        }
      },
      onClick(language) {
        this.dialog = false
        this.$emit('navigate', language);
      },
      openSite: function(site) {
        window.open(site, "_blank")
      },
    },
    created: function() {
      this.languages = languages
    },
    watch: {
      dialog(val) {
        if (val) {
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.filter.focus();
            }, 0);
          });
        }
      },
    },
  }
</script>
  
<style scoped>
  .v-dialog__content {
    background-color: rgba(0, 0, 0, 0);
  }

  .hover-card {
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
  }

  .hover-card:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    background-color: #353535;
  }
</style>