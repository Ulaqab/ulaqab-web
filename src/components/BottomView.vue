<template>
  <div class="c-bottom-view-wrap">
    <span :class="className">~ {{ status[statu] }} ~</span>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    statu: {
      type: String,
      required: true,
      default: "idle"
    }
  },
  data() {
    return {
      status: {
        loading: "加载更多",
        empty: "空空如也",
        noMore: "我是有底线的",
        error: "加载错误"
      }
    };
  },
  computed: {
    className(): string {
      const isDarkMode = this.$store.getters.isDarkMode;
      return `${isDarkMode ? "light" : "dark"}-text`;
    }
  }
});
</script>
<style lang="scss" scoped>
.c-bottom-view-wrap {
  line-height: 68px;
  > span {
    font-size: 18px;
  }
}
.dark-text {
  color: $dark-gray;
}
.light-text {
  color: $light-blue;
}
</style>
