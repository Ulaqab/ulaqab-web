<template>
  <div class="home">
    <Header/>
    <img alt="Ulanqab logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/components/Header.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Header
  }
})
export default class Home extends Vue {}
</script>
