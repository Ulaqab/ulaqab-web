<template>
  <div class="feed-create-view">
    <form>
      <select name="caregoryList" form="categoryForm">
        <option
          v-for="category in categoryList"
          :key="category.id"
          :value="category.id"
          >{{ category.name }}</option
        >
      </select>
      <input v-model="title" type="text" placeholder="请输入标题" />
      <textarea v-model="content" type="text" placeholder="请输入内容" />
      <!-- <input v-model="celllphone" type="number" placeholder="请输入手机号" /> -->
      <div @click="onSubmite">提交</div>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      categoryId: 1,
      title: "",
      content: ""
    };
  },
  computed: {
    categoryList(): [] {
      return this.$store.getters.channels;
    },
    user(): any {
      return this.$store.getters.user;
    }
  },
  methods: {
    onSubmite() {
      const params = {
        uid: 2,
        categoryId: 3,
        nickName: "空格",
        avatar:
          "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIVlAAF0ibvKmXia7AyB9jgMTMjvFksUV3It4YfJgYosYP2HYic2dblwH1A5sLk8Ow3qEs6MXR6rZ9qA/132",
        title: this.title,
        content: this.content,
        cellphone: 17600143603
      };
      this.$store.dispatch("createFeed", JSON.stringify(params));
    }
  }
});
</script>
<style scope lang="scss">
.feed-create-view {
  text-align: center;
}
form {
  margin: 16px auto;
  padding: 0 16px;
  max-width: 1080px;
}

@media only screen and (max-width: 720px) {
  form {
    max-width: 640px;
  }
}

.select-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
  padding: 16px;
  > span {
    color: #666666;
    font-size: 18px;
    margin-right: 16px;
  }
}

select {
  line-height: 36px;
  font-size: 1.2rem;
  border: 0;
  text-align: left;
  outline: none;
  border: 1px solid #999999;
}
option {
  font-size: 2rem;
  padding: 16px;
}
input,
textarea {
  padding: 0;
  margin: 0;
  width: 100%;
  font-size: 16px;
  margin-top: 16px;
  border-radius: 6px;
}
</style>
