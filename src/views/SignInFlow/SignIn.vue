<template>
  <div :class="{'light-backgroud': !isDarkMode, 'dark-backgroud': isDarkMode}" class="container">
    <div :class="{'light-request': !isDarkMode, 'dark-request': isDarkMode}" class="request">
      Don't have a Ulanqab account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/logo.png">
      <h4 :class="{'light-text': !isDarkMode, 'dark-text': isDarkMode}">Sign into Ulanqab</h4>
      <input
        :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
        type="email"
        placeholder="Email"
      >
      <input
        :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
        type="password"
        placeholder="Password"
      >
      <button>Sign In</button>
      <router-link
        :class="{'light-link': !isDarkMode, 'dark-link': isDarkMode}"
        to="/recover"
      >Forgot your password?</router-link>
      <button @click="toggleDarkMode">Toggle</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SignIn extends Vue {
  private isDarkMode!: Boolean;
  private data() {
    return {
      isDarkMode: true
    };
  }

  private toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.style.background = this.isDarkMode ? "#212c4f" : "#f0f3f5";
  }
}
</script>


<style scope lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.light-backgroud {
  background-color: $light-gray;
}

.dark-backgroud {
  background-color: $dark-blue;
}

.login {
  width: 400px;
}

.dark-request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}

.light-request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
}

.light-text {
  color: $black;
}

.dark-text {
  color: $white;
}

input {
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  padding-left: 20px;
  margin-top: 20px;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}

.light-link {
  color: rgba(0, 0, 0, 0.3);
}

.dark-link {
  color: rgba(255, 255, 255, 0.3);
}
</style>
