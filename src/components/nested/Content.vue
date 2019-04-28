<template>
  <p :class="className">{{ value }}</p>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    className(): string {
      return this.$store.getters.isDarkMode ? "dark" : "light";
    }
  }
});
</script>
<style lang="scss" scope>
p {
  font-size: 18px;
  margin: 0;
  text-align: left;
}
.dark {
  color: $white;
}
.light {
  color: $black;
}
</style>
