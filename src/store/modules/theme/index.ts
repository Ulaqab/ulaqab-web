import { Commit } from "vuex";

import { State, Theme } from "@/store/modules/theme/types";
const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";

const theme: Theme = {
  isDarkMode: userSelectedDarkMode
};

const state: State = {
  theme: theme
};

const getters = {
  isDarkMode(state: State) {
    return state.theme.isDarkMode;
  }
};

const actions = {
  toggleTheme(context: { commit: Commit }) {
    context.commit("toggleTheme");
  }
};

const mutations = {
  toggleTheme(state: State) {
    state.theme.isDarkMode = !state.theme.isDarkMode;
    window.localStorage.setItem("isDarkMode", `${state.theme.isDarkMode}`);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
