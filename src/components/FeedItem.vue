<template>
  <section class="c-feed-item">
    <a>
      <Title :value="feed.title" />
      <Content :value="feed.content" />
      <div class="meta-wrap">
        <img :src="feed.avatar" class="avatar" alt="user-avatar" />
        <MetaItem :value="feed.nickName" />
        <span class="meta-dot">·</span>
        <MetaItem :value="feed.cellphone" />
        <span class="meta-dot">·</span>
        <CreateAt :value="feed.createAt" />
      </div>
    </a>
  </section>
</template>

<script lang="ts">
import Title from "@/components/nested/Title.vue";
import Content from "@/components/nested/Content.vue";
import MetaItem from "@/components/nested/MetaItem.vue";
import CreateAt from "@/components/nested/CreateAt.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    Title,
    Content,
    MetaItem,
    CreateAt
  },
  props: {
    feed: {
      type: Object,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.c-feed-item {
  padding: 16px 32px;
  text-align: center;
}
.meta-wrap {
  display: flex;
  align-items: center;
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 16px;
}
.meta-dot {
  font-size: 32px;
  color: #999999;
  margin-right: 4px;
}
</style>
