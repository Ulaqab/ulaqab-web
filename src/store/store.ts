import Vue from "vue";
import Vuex from "vuex";
import theme from "@/store/modules/theme/index";
import user from "@/store/modules/user/index";
import home from "@/store/modules/home/index";
import feed from "@/store/modules/create/feed/feed";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme,
    user,
    home,
    feed
  }
});
