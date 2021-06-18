<template>
  <v-card
    height="100%"
    class="mx-auto pt-16"
    color="transparent"
    elevation="0"
    :max-width="padSize"
  >
    <v-row class="" align="center" no-gutters>
      <v-col sm="12" lg="5" md="4" align="center">
        <v-container class="elevation-0" tile>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.png"
            contain
            max-height="370"
          >
          </v-img>
        </v-container>
      </v-col>
      <v-col sm="12" lg="6" md="5">
        <v-responsive
          id="resumo"
          justify="center"
          class="
            text-body-1 text-sm-body-1 text-md-subtitle-1 text-lg-h5
            font-weight-thin
            text-justify
          "
          max-width="720"
        >
          Vuetify is the #1 component library for Vue.js and has been in active
          development since 2016. The goal of the project is to provide users
          with everything that is needed to build rich and engaging web
          applications using the Material Design specification. It accomplishes
          that with a consistent update cycle, Long-term Support (LTS) for
          previous versions, responsive community engagement, a vast ecosystem
          of resources and a dedication to quality components.
        </v-responsive>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AboutText",
  components: {},
  computed: {
    padSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "95%";
        case "sm":
          return "95%";
        case "md":
          return "95%";
        case "lg":
          return "60%";
        default:
          return "60%";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
// #resumo
//     font-size: 1.7em
</style>
