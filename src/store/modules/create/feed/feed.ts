import { Commit } from "vuex";
import * as api from "@/api/services/common";

interface State {
  feedList: [];
}

const state: State = {
  feedList: []
};

const getters = {};

const actions = {
  createFeed(context: { commit: Commit }, params: string) {
    api
      .postFeed(params)
      .then(res => {}, () => {})
      .catch(() => {});
  },
  updateFeed(context: { commit: Commit }, params: string) {
    api
      .updateFeed(params)
      .then(() => {}, () => {})
      .catch(() => {});
  },
  deleteFeed() {}
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
