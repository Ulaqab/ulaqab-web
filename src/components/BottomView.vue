<template>
  <div class="c-bottom-view-wrap">
    <span>~ {{ status[statu] }} ~</span>
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
  }
});
</script>
<style lang="scss" scoped>
.c-bottom-view-wrap {
  line-height: 68px;
  > span {
    font-size: 18px;
    color: #ffffff;
  }
}
</style>
