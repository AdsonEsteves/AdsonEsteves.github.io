<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="img">
      <v-card-title class="grey darken-3 py-1 pl-3">
        {{ projectInfo.name | fixString }}
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{ projectInfo.language }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ projectInfo.description }}</div>
    </v-card-text>

    <v-card-actions>
      <a :href="projectInfo.html_url" style="text-decoration: none">
        <v-btn color="orange" text> Github </v-btn>
      </a>
      <a
        :href="projectInfo.html_url + '/releases'"
        style="text-decoration: none"
      >
        <v-btn color="orange" text> Releases </v-btn>
      </a>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["project"],
  name: "projectCard",
  data() {
    return {
      projectInfo: {},
      rawGit: "https://raw.githubusercontent.com/",
      readme: "vazio",
      img: "",
    };
  },
  methods: {
    getImg() {
      if (this.projectInfo.name === undefined) {
        return;
      }
      this.getReadme().then((response) => {
        if ((response + "").includes("PREVIEW")) {
          var re = /(https:\/\/user-images.githubusercontent.com\/.*\.png)/g;
          var found = response.match(re);
          if (found == null) {
            re = /(https:\/\/user-images.githubusercontent.com\/.*\.jpg)/g;
            found = response.match(re);
          }
          this.img = found[0];
          return;
        }
        this.img = this.projectInfo.owner.avatar_url;
      });
    },
    getReadme() {
      return this.axios
        .get(this.rawGit + this.projectInfo.full_name + "/master/README.md")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
          this.projectInfo = {};
        });
    },
  },
  mounted() {
    this.axios
      .get(this.project)
      .then((response) => (this.projectInfo = response.data))
      .catch((error) => {
        console.log(error);
        this.projectInfo = {};
      })
      .finally(() => this.getImg());
  },
  filters: {
    fixString: function (string) {
      if (string !== undefined)
        return (
          string.charAt(0).toUpperCase() + string.slice(1).replaceAll("-", " ")
        );
    },
  },
};
</script>
<style lang="css" scoped>
#opct {
  background-color: rgba(255, 0, 0, 0.2);
}
</style>