<template>
  <v-container ref="title" id="title">
    <v-sheet color="transparent" height="100vh" max-width="100%" class="d-flex">
      <v-row align="center" class="mb-16 pb-16" justify="center">
        <v-col cols="12">
          <v-row no-gutters>
            <v-col>
              <Logo />
            </v-col>
          </v-row>
          <v-row justify="end" no-gutters>
            <v-col class="d-flex px-2 justify-end" md="2">
              <a
                href="https://www.linkedin.com/in/adson-esteves-472865183/"
                style="text-decoration: none"
              >
                <v-icon large class="px-1"> mdi-linkedin </v-icon>
              </a>
              <a
                href="https://github.com/AdsonEsteves"
                style="text-decoration: none"
              >
                <v-icon large class="px-1"> mdi-github </v-icon>
              </a>
              <a
                href="https://discord.com/users/219967258657554433/"
                style="text-decoration: none"
              >
                <v-icon large class="px-1"> mdi-discord </v-icon>
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import Logo from "../components/logo.vue";

export default {
  name: "Title",
  components: {
    Logo,
  },
  mounted() {
    document.addEventListener("scroll", this.saveScreen);
  },
  methods: {
    saveScreen() {
      var top = this.$refs.title.getBoundingClientRect().top;
      var values = {
        name: "title",
        top: top,
      };
      this.$store.commit("changePosition", values);
    },
  },
};
</script>

