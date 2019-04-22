import Vue from "vue";
import Vuex from "vuex";
import theme from "@/store/modules/theme/index";
import home from "@/store/modules/home/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    home
  }
});
