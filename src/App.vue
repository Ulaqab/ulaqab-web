<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "App",
  components: {
    Header
  }
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

#container {
}
* {
  transition: .8s cubic-bezier(.2, .8, .2, 1);
}
</style>
