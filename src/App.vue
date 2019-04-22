<template>
  <div id="app">
    <Header />
    <div id="container">
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
  font-size: 1rem;
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
  min-height: 100vh;
  margin-top: 75px;
}
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
</style>
