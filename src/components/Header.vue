<template>
  <header>
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/signin">Sign In</router-link>
    </div>
    <button @click="toggleDarkMode" class="btn-toggle-theme">
      {{ isDarkMode ? "light" : "dark" }}
    </button>
  </header>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Watch("isDarkMode", { immediate: true, deep: true })
  onSwitchTheme() {
    document.body.style.background = this.isDarkMode ? "#212c4f" : "#f0f3f5";
  }

  get isDarkMode() {
    return this.$store.getters.isDarkMode;
  }

  private toggleDarkMode() {
    this.$store.dispatch("toggleTheme");
  }
}
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 16px;
  z-index: 999;
}

.nav {
  a {
    font-weight: bold;
    color: $white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn-toggle-theme {
  width: 4.48rem;
  height: 2.28rem;
  padding: 0;
  margin: 0;
  align-self: end;
}
</style>
