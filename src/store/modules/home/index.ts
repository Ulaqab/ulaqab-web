import { Commit, Dispatch } from "vuex";
import * as api from "@/api/services/common";

interface State {
  currentIndex: number;
  channels: [];
  feeds: [];
  bottomViewStatus: {
    status: string;
    show: boolean;
  };
}

const state: State = {
  currentIndex: 1,
  channels: [],
  feeds: [],
  bottomViewStatus: {
    status: "idle",
    show: false
  }
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
  bottomViewStatus(state: State) {
    return state.bottomViewStatus;
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
      (error: string) => {}
    );
  },
  async getFeedList(
    context: { commit: Commit; dispatch: Dispatch },
    params: any
  ) {
    if (params.page > 1) {
      context.commit("updateBottomViewStatus", "loading");
    }
    if (params.page === 1) {
      await context.dispatch("getChannelList");
    }
    api.getFeeds(params).then(
      (res: any) => {
        context.commit("updateFeedList", res.data.list);
        let status = res.data.hasMore ? "complete" : "noMore";
        if (params.page === 1 && res.data.list.length < 1) {
          status = "empty";
        }
        context.commit("updateBottomViewStatus", status);
      },
      (error: string) => {
        context.commit("updateBottomViewStatus", "error");
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
  updateFeedList(state: State, feedList: []) {
    state.feeds = feedList;
  },
  updateBottomViewStatus(state: State, status: string) {
    state.bottomViewStatus.status = status;
    state.bottomViewStatus.show =
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
