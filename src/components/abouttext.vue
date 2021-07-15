<template>
  <v-card
    class="mx-auto pt-16"
    color="transparent"
    elevation="0"
    :max-width="padSize"
  >
    <v-row class="" align="center" no-gutters>
      <v-col sm="12" lg="5" md="4" align="center">
        <v-container class="elevation-0" tile>
          <v-img :src="myImage" contain max-height="370"> </v-img>
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
          I am a programmer and researcher, interested in learning and
          developing technologies that help to improve people's daily lives. In
          research developments I have worked with Java, Unity and Javascript,
          and with framework Spring, SQL and GRaphQL databases, and I have
          knowledge about Augmented Reality with Unity and Intelligent Agents. I
          really enjoy working on discovering how the software systems works and
          improve it according to its characteristics. Whenever I don't know
          anything, I quickly seek the knowledge I need, allowing me to adapt to
          different cases. It was one of the greatest learnings I had during my
          formation. I have a particular interest in Augmented Reality and
          Artificial Intelligence technologies. However, my interest in
          discovering new technologies gives me motivation to learn all kinds of
          systems.
        </v-responsive>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AboutText",
  components: {},
  data() {
    return {
      myImage: require("../assets/imagens/pic.jpg"),
    };
  },
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
          return "95%";
        case "xl":
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
