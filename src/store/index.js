// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
state: {
    positions: {
    title: 0,
    quote: 0,
    projects: 0,
    about: 0
    }
 },
 getters: {},
    mutations: {
        changePosition(state, values) {
            state.positions[values.name] = values.top;
   }
 },
 actions: {}
});