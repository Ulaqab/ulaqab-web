<template>
  <div class="feed-create-view">
    <form>
      <div class="select-group">
        <span>类型选择</span>
        <select v-model="categoryId" name="caregoryList" form="categoryForm">
          <option
            v-for="category in categoryList"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <input v-model.trim="title" type="text" placeholder="请输入标题" />
      <textarea v-model="content" type="text" placeholder="请输入内容" />
      <input
        v-model.number="cellphone"
        type="number"
        name="telephone"
        placeholder="请输入手机号"
        maxlength="11"
      />
      <button @click="onSubmite" type="button">提交</button>
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
      content: "",
      cellphone: ""
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
        uid: this.user.id,
        nickName: this.user.nickName,
        avatar: this.user.avatar,
        categoryId: this.categoryId,
        title: this.title,
        content: this.content,
        cellphone: this.cellphone
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
  font-size: 16px;
  margin-top: 16px;
  border-radius: 6px;
  outline: none;
  border: 0;
}
input {
  width: 100%;
  line-height: 38px;
  padding: 8px;
}
textarea {
  width: 100%;
  min-height: 68px;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: none;
  resize: none;
}
button {
  outline: none;
}
</style>
