<template>
  <div class="home">
    <div class="layout-channel-bar">
      <div
        v-for="channel in ChannelList"
        :key="channel.id"
        @click="onClickItemListener(channel.id)"
        :class="{
          'layout-channel-bar__item--active--dark':
            channel.id === currentIndex && isDarkMode,
          'layout-channel-bar__item--active--light':
            channel.id === currentIndex && !isDarkMode,
          'layout-channel-bar__item--normal--dark':
            channel.id !== currentIndex && isDarkMode,
          'layout-channel-bar__item--normal--light':
            channel.id !== currentIndex && !isDarkMode
        }"
        class="layout-channel-bar__item"
      >
        <span>{{ channel.name }}</span>
      </div>
    </div>
    <div class="feed-container">
      <list-view
        :loading="loadStatus === 'loading'"
        :finished="loadStatus === 'noMore'"
        :error="loadStatus === 'error'"
        @load="onLoadMore"
      >
        <FeedItem v-for="feed in FeedList" :key="feed.id" :feed="feed" />
        <BottomView v-if="loadStatus.show" :statu="loadStatus.status" />
      </list-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import ListView from "@/components/list/ListView.vue";
import FeedItem from "@/components/FeedItem.vue";
import BottomView from "@/components/BottomView.vue";
import { stop } from "../components/list/event";
@Component({
  components: {
    ListView,
    FeedItem,
    BottomView
  }
})
export default class Home extends Vue {
  beforeMount() {
    const params = {
      page: this.page,
      count: 10,
      category: this.currentIndex
    };
    this.$store.dispatch("getFeedList", params);
  }

  get isDarkMode(): boolean {
    return this.$store.getters.isDarkMode;
  }
  get ChannelList() {
    return this.$store.getters.channels;
  }
  get FeedList() {
    return this.$store.getters.feeds;
  }
  get currentIndex() {
    return this.$store.getters.currentIndex;
  }
  get page() {
    return this.$store.getters.page;
  }
  get loadStatus() {
    return this.$store.getters.loadStatus;
  }
  onClickItemListener(index: number) {
    this.$store.dispatch("updateChannelIndex", index);
  }
  onLoadMore() {
    if (this.loadStatus.show) return;
    if (this.loadStatus.status === "noMore") return;
    if (this.loadStatus.status === "empty") return;
    if (this.loadStatus.status === "error") return;
    const page = this.page + 1;
    const params = {
      page: page,
      count: 10,
      category: this.currentIndex
    };
    this.$store.dispatch("getFeedList", params);
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
.feed-container {
  min-height: 100vh;
}
</style>
