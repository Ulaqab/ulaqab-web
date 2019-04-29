interface State {
  user: any;
}

const state: State = {
  user: {
    id: 2,
    avatar:
      "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIVlAAF0ibvKmXia7AyB9jgMTMjvFksUV3It4YfJgYosYP2HYic2dblwH1A5sLk8Ow3qEs6MXR6rZ9qA/132",
    nickName: "空格"
  }
};

const getters = {
  user(state: State) {
    return state.user;
  }
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
