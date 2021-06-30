<template>
  <v-card
    height="100%"
    class="mx-auto pt-16"
    color="transparent"
    elevation="0"
    :max-width="padSize"
  >
    <v-row class="" align="center" no-gutters>
      <v-col sm="12" lg="5" md="4" align="center">
        <v-container class="elevation-0" tile>
          <v-img
            src="https://cdn.vuetifyjs.com/images/john.png"
            contain
            max-height="370"
          >
          </v-img>
        </v-container>
      </v-col>
      <v-col sm="12" lg="6" md="5">
        <v-responsive
          id="resumo"
          justify="center"
          class="
            text-body-1 text-sm-body-1 text-md-subtitle-1 text-lg-h5
            font-weight-thin
            text-justify
          "
          max-width="720"
        >
          Sou programador e pesquisador, interessado em aprender e desenvolver
          tecnologias que ajudam a melhorar o cotidiano das pessoas. Nos
          desenvolvimentos de pesquisa já trabalhei com Java, Unity e
          Javascript, e com frameworks como Spring, bancos de Dados SQL e
          GRaphQL, e conhecimentos sobre Realidade Aumentada com Unity e Agentes
          Inteligentes. Gosto muito de trabalhar descobrindo como os softwares
          funcionam e melhorando as suas funcionalidades. Tenho um interesse
          particular por tecnologias de Realidade Aumentada e Inteligência
          Artificial. Porém o meu interesse por descobrir novas tecnologias me
          dá motivação a aprender todo tipo de sistema.
        </v-responsive>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AboutText",
  components: {},
  computed: {
    padSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "95%";
        case "sm":
          return "95%";
        case "md":
          return "95%";
        case "lg":
          return "60%";
        default:
          return "60%";
      }
    },
  },
};
</script>

<style lang="sass" scoped>
// #resumo
//     font-size: 1.7em
</style>
