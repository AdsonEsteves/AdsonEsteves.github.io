<template>
  <v-container fill-height fluid id="projects" style="height: 100vh">
    <v-row>
      <v-col>
        <div class="hidden-sm-and-down" style="height: 10vh"></div>
        <div style="height: 90vh">
          <Card />
        </div>
      </v-col>
      <v-col>
        <div class="hidden-sm-and-down" style="height: 30vh"></div>
        <div style="height: 70vh">
          <Card />
        </div>
      </v-col>

      <v-col>
        <div style="height: 50vh">
          <Card />
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

var portugolRepo = "https://api.github.com/repos/UNIVALI-LITE/Portugol-Studio";
var arMapRepo =
  "https://api.github.com/repos/AdsonEsteves/augmented-reality-map";
var SACIPRepo = "https://api.github.com/repos/AdsonEsteves/SACIP";

export default {
  name: "Projects",
  components: {
    Card,
  },
};
</script>