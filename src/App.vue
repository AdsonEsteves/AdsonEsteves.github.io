<template>
  <v-app>
    <FAButton />
    <NavBar />
    <v-main>
      <v-container fluid>
        <Title />
        <About />
        <Projects />
        <!-- <Recent /> -->
        <Quote />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/navbar.vue";
import FAButton from "./components/floatingbutton.vue";
import Title from "./sections/Title.vue";
import About from "./sections/About.vue";
import Projects from "./sections/Projects.vue";
// import Recent from "./sections/Recent.vue";
import Quote from "./sections/Quote.vue";

export default {
  name: "App",

  components: {
    NavBar,
    FAButton,
    Title,
    About,
    Projects,
    // Recent,
    Quote,
  },

  data: () => ({
    //
  }),
};
</script>
