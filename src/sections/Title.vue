<template>
  <v-container id="title" fill-height style="height: 100vh">
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
};
</script>

