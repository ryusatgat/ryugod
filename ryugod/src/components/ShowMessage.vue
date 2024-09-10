<template>
  <v-dialog
    v-model="dialog"
    :max-width="width"
    scrollable
    @keydown.esc="$emit('onNo')"
    @keydown.enter="type==='yesno'?$emit('onYes'):false,dialog=false"
  >
    <v-card>
      <v-card-title class="blue-grey darken-1">
        {{title}}
      <v-spacer></v-spacer>
      <v-btn color="error" icon @click='dialog=false'><v-icon>mdi-close-box</v-icon></v-btn>
      </v-card-title>
      <v-card-text>
        <p></p>
        <slot></slot>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="$emit('onYes'), dialog = false">OK</v-btn>
        <v-btn v-if="type==='yesno'" color="red darken-1" text @click="$emit('onNo'), dialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "ShowMessage",
    props: [
      "title",
      "type",
      "onYes",
      "onNo",
    ],
    data: () => {
      return ({
        dialog: false,
        width: "auto",
      })
    },
    methods: {
      show(width) {
        this.dialog = true
        if (width) {
          this.width = width
        }
      },
      yes() {
        if (this.onYes) {
          this.onYes()
        }
      },
      no() {
        if (this.onNo) {
          this.onNo()
        }
      },
    },
    mounted: function () {
    }
  }
</script>