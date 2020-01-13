import { Commit, Dispatch } from "vuex";
import * as api from "@/api/services/common";

interface State {
  currentIndex: number;
  channels: [];
  feeds: any[];
  loadStatus: {
    status: string;
    show: boolean;
  };
  page: number;
}

const state: State = {
  currentIndex: 1,
  channels: [],
  feeds: [],
  loadStatus: {
    status: "idle",
    show: false
  },
  page: 1
};

const getters = {
  currentIndex(state: State) {
    return state.currentIndex;
  },
  channels(state: State) {
    return state.channels;
  },
  feeds(state: State) {
    return state.feeds;
  },
  page(state: State) {
    return state.page;
  },
  loadStatus(state: State) {
    return state.loadStatus;
  }
};

const actions = {
  updateChannelIndex(
    context: { commit: Commit; dispatch: Dispatch },
    index: number
  ) {
    context.commit("updateChannelIndex", index);
    const params = {
      page: 1,
      count: 10,
      category: index
    };
    context.dispatch("getFeedList", params);
  },
  async getChannelList(context: { commit: Commit }) {
    api.getChannels().then(
      (res: any) => {
        context.commit("updateChannelList", res.data.list);
      },
      (error: string) => { }
    );
  },
  async getFeedList(
    context: { commit: Commit; dispatch: Dispatch },
    params: any
  ) {
    context.commit("updatePage", params.page);
    if (params.page > 1) {
      context.commit("updateLoadStatus", "loading");
    }
    if (params.page === 1) {
      context.commit("updateLoadStatus", "idle");
      await context.dispatch("getChannelList");
    }
    api.getFeeds(params).then(
      (res: any) => {
        if (params.page === 1) {
          context.commit("updateFeedList", {
            refresh: true,
            data: res.data.list
          });
          if (res.data.list.length < 1) {
            context.commit("updateLoadStatus", "empty");
          }
        } else {
          const status = res.data.list.length < 10 ? "noMore" : "complete";
          context.commit("updateFeedList", {
            refresh: false,
            data: res.data.list
          });
          context.commit("updateLoadStatus", status);
        }
      },
      (error: string) => {
        context.commit("updateLoadStatus", "error");
      }
    );
  }
};

const mutations = {
  updateChannelIndex(state: State, index: number) {
    state.currentIndex = index;
  },
  updateChannelList(state: State, channelList: []) {
    state.channels = channelList;
  },
  updateFeedList(state: State, arg: { refresh: boolean; data: [] }) {
    if (arg.refresh) {
      state.feeds = arg.data;
    } else {
      state.feeds = state.feeds.concat(arg.data);
    }
  },
  updatePage(state: State, page: number) {
    state.page = page;
  },
  updateLoadStatus(state: State, status: string) {
    state.loadStatus.status = status;
    state.loadStatus.show =
      status === "loading" ||
      status === "error" ||
      status === "empty" ||
      status === "noMore";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
