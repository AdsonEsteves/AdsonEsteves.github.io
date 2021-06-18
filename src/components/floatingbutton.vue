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
    @click="$vuetify.goTo('#about-me')"
  >
    <v-icon> mdi-chevron-down</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "FAButton",
};
</script>

<style lang="sass" scoped>
#no-background-hover::before
    background-color: transparent !important
</style>