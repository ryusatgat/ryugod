<template>
  <v-dialog
    max-width="500px"
    v-model="dialog"
    @keydown.esc="dialog=false"
    @keydown.enter="saveOptions"
  >
    <v-card>
    <v-card-title>
      {{$t('options')}}
    </v-card-title>
    <v-container>
      <v-card-text>
        <v-text-field
          ref="args"
          v-model="args"
          :label="`${selectedLanguage} ${$t('arguments')}`"
          hide-details="auto"
          dense
          autofocus
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col>
          <v-select
            v-model="tabSize"
            :items="[1, 2, 3, 4, 5, 6, 7, 8]"
            :label="$t('tabSize')"
            dense
          ></v-select>
          </v-col>
          <v-col>
          <v-select
            v-model="fontSize"
            :items="[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
            :label="$t('fontSize')"
            dense
          ></v-select>
          </v-col>
          <v-col>
          <v-select
            v-model="dark"
            :items="[{text: $t('dark'), value:true}, {text: $t('light'), value:false}]"
            :label="$t('theme')"
            dense
          ></v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-container>
    <v-card-actions>
      <v-btn
        color="primary"
        text
        @click="saveOptions"
      >
        {{$t('ok')}}
      </v-btn>
      <v-btn
        color="error"
        text
        @click="dialog=false"
      >
        {{$t('cancel')}}
      </v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'Settings',
  props: {
  },
  data: () => ({
    dialog: false,
    selectedLanguage: '',
    tabSize: 4,
    fontSize: 10,
    dark: true,
    args: '',
  }),
  methods: {
    saveOptions: function() {
      const options = {
        dark:this.dark,
        args:this.args,
        fontSize:this.fontSize,
        tabSize:this.tabSize
      }

      this.$emit("saveOptions", options)
      this.dialog=false
    },
    show: function (options) {
      this.dark = options.dark
      this.args = options.args?options.args:""
      this.fontSize = Math.round(parseFloat(options.fontSize))
      this.tabSize = options.tabSize
      this.selectedLanguage = options.selectedLanguage
      this.dialog = true
    },
  },
}
</script>