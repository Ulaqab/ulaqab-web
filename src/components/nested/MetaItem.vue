<template>
  <span :class="className" class="meta-info">{{ value }}</span>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
      default: ""
    }
  },
  computed: {
    className(): string {
      const isDarkMode = this.$store.getters.isDarkMode;
      return `meta-info--${isDarkMode ? "dark" : "light"}`;
    }
  }
});
</script>
<style scope lang="scss">
.meta-info {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  text-align: left;
  margin-right: 4px;
  &:last-child {
    margin-right: 0;
  }
  &--dark {
    color: #ffffff;
  }
  &--light {
    color: #666666;
  }
}
</style>
