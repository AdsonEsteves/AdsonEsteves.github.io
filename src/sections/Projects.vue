<template>
  <v-container ref="projects" fluid id="projects" class="mt-16">
    <v-sheet
      color="transparent"
      :height="$vuetify.breakpoint.smAndDown ? 'auto' : '100vh'"
    >
      <div class="hidden-lg-and-up">
        <v-card-text>
          <p class=""></p>
          <div class="text--primary text-h4 text-lg-h1 text-center">
            Projects
          </div>
        </v-card-text>
      </div>
      <v-row justify="center">
        <v-col>
          <div class="hidden-md-and-down" style="height: 10vh"></div>
          <div>
            <Card :project="portugolRepo" />
          </div>
        </v-col>

        <v-col>
          <div class="hidden-md-and-down" style="height: 30vh"></div>
          <div>
            <Card :project="arMapRepo" />
          </div>
        </v-col>

        <v-col>
          <div>
            <Card :project="SACIPRepo" />
          </div>
          <div class="hidden-md-and-down" style="height: 50vh">
            <v-card-text>
              <p class=""></p>
              <div class="text--primary text-h4 text-lg-h1 text-center">
                Projects
              </div>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
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