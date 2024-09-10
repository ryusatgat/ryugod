<template>
  <v-tooltip bottom>
    <span>{{ tooltip }}</span>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon small @click="click" v-bind="attrs" v-on="on"
        ><v-icon>{{ icon }}</v-icon></v-btn
      >
    </template>
  </v-tooltip>
</template>

<script>
export default {
  name: "ToolbarIcon",

  components: {},
  props: {
    tooltip: String,
    icon: String,
  },
  methods: {
    click: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>