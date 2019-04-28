<template>
  <div class="c-list-view">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { on, off } from "@/components/list/event";
import {
  getScrollTop,
  getElementTop,
  getVisibleHeight,
  getScrollEventTarget
} from "@/components/list/scroll";

export default Vue.extend({
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: false
    },
    finished: {
      type: Boolean,
      required: true,
      default: false
    },
    error: {
      type: Boolean,
      required: true,
      default: false
    },
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: "down"
    }
  },
  data() {
    return {
      binded: false
    };
  },
  watch: {
    loading() {
      this.$nextTick().then(() => this.check);
    },

    finished() {
      this.$nextTick().then(() => this.check);
    }
  },
  methods: {
    check() {
      if (this.loading || this.finished || this.error) {
        return;
      }

      const el = this.$el;
      const scroller = this.scroller;
      const scrollerHeight = getVisibleHeight(scroller);

      /* istanbul ignore next */
      if (
        !scrollerHeight ||
        window.getComputedStyle(el).display === "none" ||
        el.offsetParent === null
      ) {
        return;
      }

      const { offset, direction } = this;

      function isReachEdge() {
        if (el === scroller) {
          const scrollTop = getScrollTop(el);

          if (direction === "up") {
            return scrollTop <= offset;
          }

          const targetBottom = scrollTop + scrollerHeight;
          return scroller.scrollHeight - targetBottom <= offset;
        }

        if (direction === "up") {
          return getScrollTop(scroller) - getElementTop(el) <= offset;
        }

        const elBottom =
          getElementTop(el) + getVisibleHeight(el) - getElementTop(scroller);
        return elBottom - scrollerHeight <= offset;
      }

      if (isReachEdge()) {
        this.$emit("load");
      }
    },
    handler(bind: boolean) {
      if (this.binded !== bind) {
        this.binded = bind;
        (bind ? on : off)(this.scroller, "scroll", this.check);
      }
    }
  },
  mounted() {
    this.scroller = getScrollEventTarget(this.$el, window);
    this.handler(true);
    if (this.immediateCheck) {
      this.$nextTick().then(() => this.check);
    }
  },
  destroyed() {
    this.handler(false);
  },
  activated() {
    this.handler(true);
  }
});
</script>
