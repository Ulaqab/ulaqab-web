<template>
  <div class="home">
    <div class="layout-channel-bar">
      <div
        v-for="channel in ChannelList"
        :key="channel.id"
        @click="onClickItemListener(channel.id)"
        :class="{
          'layout-channel-bar__item--active--dark': channel.id === currentIndex && isDarkMode,
          'layout-channel-bar__item--active--light': channel.id === currentIndex && !isDarkMode,
          'layout-channel-bar__item--normal--dark': channel.id !== currentIndex && isDarkMode,
          'layout-channel-bar__item--normal--light': channel.id !== currentIndex && !isDarkMode,
        }"
        class="layout-channel-bar__item"
      >
        <span>{{ channel.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  components: {}
})
export default class Home extends Vue {
  beforeMount() {
    this.$store.dispatch("getChannelList");
  }
  get isDarkMode(): Boolean {
    return this.$store.getters.isDarkMode;
  }
  get ChannelList() {
    return this.$store.getters.channels;
  }
  get currentIndex() {
    return this.$store.getters.currentIndex;
  }
  onClickItemListener(index: number) {
    this.$store.dispatch("updateChannelIndex", index);
  }
}
</script>

<style lang="scss" scoped>
.home {
}
.layout-channel-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  &__item {
    padding: 4px 8px;
    font-size: 1.2rem;
    white-space: nowrap;
    &--normal {
      &--dark {
        color: darken($white, 50);
      }
      &--light {
        color: lighten($black, 50);
      }
    }
    &--active {
      &--dark {
        color: $white;
      }
      &--light {
        color: $black;
      }
    }
  }
}
</style>

