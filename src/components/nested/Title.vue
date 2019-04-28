<template>
  <h3 :class="className">{{ value }}</h3>
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
h3 {
  @include heading_4($white);
  text-align: left;
}
.dark {
  color: $white;
}
.light {
  color: $black;
}
</style>
