<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App"
});
</script>


<style lang="scss">
body {
  background-color: $dark-blue;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($dark-gray);
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}
</style>
