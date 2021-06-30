<template>
  <v-container ref="about" fluid id="about-me" style="height: 100vh">
    <v-card flat color="transparent" :height="padSize">
      <v-card-text>
        <p class=""></p>
        <div class="text--primary text-h4 text-lg-h1 text-right">About Me</div>
      </v-card-text>
    </v-card>
    <AboutText />
  </v-container>
</template>

<script>
import AboutText from "../components/abouttext.vue";

export default {
  name: "About",
  components: {
    AboutText,
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
  },
  mounted() {
    document.addEventListener("scroll", this.saveScreen);
  },
  methods: {
    saveScreen() {
      var top = this.$refs.about.getBoundingClientRect().top;
      var values = {
        name: "about",
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
