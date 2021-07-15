<template>
  <v-container ref="quote" fluid id="quote" class="mt-16">
    <v-card flat color="transparent" width="100%" height="30vh">
      <v-card-text>
        <p class=""></p>
        <div class="text--primary text-h4 text-lg-h1 text-left">Nice Quote</div>
      </v-card-text>
    </v-card>
    <v-sheet color="transparent" height="60vh" class="d-flex">
      <v-card
        class="mx-auto"
        color="transparent"
        elevation="0"
        :max-width="padtSize"
      >
        <v-row class="" align="center" no-gutters>
          <v-col sm="12" lg="12" md="5">
            <v-card
              flat
              color="transparent"
              id="resumo"
              justify="center"
              class="
                text-body-1 text-sm-body-1 text-md-subtitle-1 text-lg-h3
                font-weight-thin
                text-justify
              "
            >
              “It doesn’t matter if we’re wrong…because every time we go wrong,
              we’ll continue to look for the right answer.” ― Hikigaya Hachiman
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script>
// import AboutText from "../components/abouttext.vue";

export default {
  name: "About",
  components: {
    // AboutText,
  },
  computed: {
    padSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "5%";
        case "sm":
          return "5%";
        case "md":
          return "5%";
        case "lg":
          return "20%";
        default:
          return "20%";
      }
    },
    padtSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "95%";
        case "sm":
          return "95%";
        case "md":
          return "95%";
        case "lg":
          return "95%";
        case "xl":
          return "60%";
        default:
          return "60%";
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.saveScreen);
  },
  methods: {
    saveScreen() {
      var top = this.$refs.quote.getBoundingClientRect().top;
      var values = {
        name: "quote",
        top: top,
      };
      this.$store.commit("changePosition", values);
    },
  },
};
</script>

<style lang="sass" scoped>
// #resumo
//     font-size: 1.7em
</style>
