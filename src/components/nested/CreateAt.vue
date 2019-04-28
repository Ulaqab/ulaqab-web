<template>
  <MetaItem :value="content" />
</template>
<script lang="ts">
import moment from "moment";
import Vue from "vue";
import MetaItem from "@/components/nested/MetaItem.vue";
export default Vue.extend({
  components: {
    MetaItem
  },
  props: {
    value: {
      type: String,
      required: true,
      default: ""
    }
  },
  computed: {
    content(): string {
      moment.locale("zh-CN");
      return moment(this.value).fromNow();
    }
  }
});
</script>
