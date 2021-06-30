<template>
  <v-container ref="title" id="title" fill-height style="height: 100vh">
    <v-row align="center" class="pb-16 mb-16" justify="center">
      <v-col cols="12">
        <Logo />
      </v-col>
    </v-row>
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

