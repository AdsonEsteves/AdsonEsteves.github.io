<template>
  <v-container
    ref="projects"
    fill-height
    fluid
    id="projects"
    style="height: 100vh"
  >
    <v-row>
      <v-col>
        <div class="hidden-sm-and-down" style="height: 10vh"></div>
        <div style="height: 90vh">
          <Card :project="portugolRepo" />
        </div>
      </v-col>
      <v-col>
        <div class="hidden-sm-and-down" style="height: 30vh"></div>
        <div style="height: 70vh">
          <Card :project="arMapRepo" />
        </div>
      </v-col>

      <v-col>
        <div style="height: 50vh">
          <Card :project="SACIPRepo" />
        </div>
        <div class="hidden-sm-and-down" style="height: 50vh">
          <v-card-text>
            <p class=""></p>
            <div class="text--primary text-h4 text-lg-h1 text-center">
              Projects
            </div>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "../components/projectCard.vue";

export default {
  name: "Projects",
  components: {
    Card,
  },
  data() {
    return {
      portugolRepo: "https://api.github.com/repos/UNIVALI-LITE/Portugol-Studio",
      arMapRepo:
        "https://api.github.com/repos/AdsonEsteves/augmented-reality-map",
      SACIPRepo: "https://api.github.com/repos/AdsonEsteves/SACIP",
    };
  },
  mounted() {
    document.addEventListener("scroll", this.saveScreen);
  },
  methods: {
    saveScreen() {
      var top = this.$refs.projects.getBoundingClientRect().top;
      var values = {
        name: "projects",
        top: top,
      };
      this.$store.commit("changePosition", values);
    },
  },
};
</script>