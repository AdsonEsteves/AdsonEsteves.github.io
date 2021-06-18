<template>
  <v-app-bar app color="transparent" flat dark class="pl-5 mt-3">
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-toolbar-title>Adson Esteves</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-tab
      :ripple="false"
      flat
      color="transparent"
      @click="$vuetify.goTo('#about-me')"
    >
      About
    </v-tab>
    <v-tab
      :ripple="false"
      flat
      color="transparent"
      @click="$vuetify.goTo('#projects')"
    >
      Projects
    </v-tab>
    <v-tab
      :ripple="false"
      flat
      color="transparent"
      @click="$vuetify.goTo('#about-me')"
    >
      Contact
    </v-tab>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
</style>