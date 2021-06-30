<template>
  <v-btn
    :ripple="false"
    color="transparent"
    id="no-background-hover"
    elevation="0"
    fab
    fixed
    center
    bottom
    :style="{ left: '50%', transform: 'translateX(-50%)' }"
    @click="$vuetify.goTo(handler)"
  >
    <v-flex xs12 class="hello-text">
      <div>{{ nextSection }}</div>
      <v-icon> mdi-chevron-down</v-icon>
    </v-flex>
  </v-btn>
</template>

<script>
export default {
  name: "FAButton",
  data() {
    return {
      handler: "#about-me",
      nextSection: "About me",
    };
  },
  mounted() {
    document.addEventListener("scroll", this.findScreen);
  },
  methods: {
    findScreen() {
      //const left = this.$refs.title.getBoundingClientRect().left
      const titletop = this.$store.state.positions.title;
      const abouttop = this.$store.state.positions.about;
      const quotetop = this.$store.state.positions.quote;
      const projectstop = this.$store.state.positions.projects;
      var a = [
        Math.abs(titletop),
        Math.abs(abouttop),
        Math.abs(projectstop),
        Math.abs(quotetop),
      ];
      var rightsection = this.indexOfSmallest(a);
      switch (rightsection) {
        case 0:
          this.handler = "#about-me";
          this.nextSection = "About me";
          break;
        case 1:
          this.handler = "#projects";
          this.nextSection = "Projects";
          break;
        case 2:
          this.handler = "#quote";
          this.nextSection = "Nice Quote";
          break;
        case 3:
          this.handler = "#title";
          this.nextSection = "Back To Title";
          break;
        default:
          break;
      }
    },
    indexOfSmallest(a) {
      return a.indexOf(Math.min.apply(Math, a));
    },
  },
};
</script>

<style lang="sass" scoped>
#no-background-hover::before
  background-color: transparent !important

  #hello-text
    display: flex
    flex-direction: column
    align-items: center
</style>