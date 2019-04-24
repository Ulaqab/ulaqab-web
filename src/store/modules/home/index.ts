import { Commit } from "vuex";
import { getChannels } from "@/api/services/common";

interface State {
  channels: [];
  currentIndex: number;
}

const state: State = {
  channels: [],
  currentIndex: 1
};

const getters = {
  channels(state: State) {
    return state.channels;
  },
  currentIndex(state: State) {
    return state.currentIndex;
  }
};

const actions = {
  getChannelList(context: { commit: Commit }) {
    getChannels().then(
      (res: any) => {
        context.commit("updateChannelList", res.data.list);
      },
      (error: string) => {}
    );
  },
  updateChannelIndex(context: { commit: Commit }, index: number) {
    context.commit("updateChannelIndex", index);
  }
};

const mutations = {
  updateChannelList(state: State, channelList: []) {
    state.channels = channelList;
  },
  updateChannelIndex(state: State, index: number) {
    state.currentIndex = index;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
