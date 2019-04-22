<template>
  <header>
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/signin">Sign In</router-link>
    </div>
    <div
      @click="toggleDarkMode"
      :class="{ 'light-toggle': !isDarkMode, 'dark-toggle': isDarkMode }"
      class="toggle"
    >
      <div
        :class="{ 'toggle-left': !isDarkMode, 'toggle-right': isDarkMode }"
        class="toggle-switch"
      >
        <img v-if="!isDarkMode" src="@/assets/icons/sun.svg" />
        <img v-if="isDarkMode" src="@/assets/icons/moon.svg" />
      </div>
    </div>
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

.toggle {
  border-radius: 10px;
  width: 100px;
  box-sizing: border-box;
  margin: 0;
  display: flex;
}

.light-toggle {
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1);
}

.dark-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.01);
  box-shadow: inset 0 5px 10px rgba(255, 255, 255, 0.1);
}

.toggle-switch {
  margin: 2px;
  padding: 8px 16px;
  border-radius: 8px;
}

.toggle-left {
  transform: translateX(0);
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
}

.toggle-right {
  transform: translateX(90%);
  background: #1b233f;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
}
</style>
