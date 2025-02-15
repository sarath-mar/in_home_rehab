<template>
  <loader v-if="isLoading"/>
  <div v-else class="login-container">
    <div class="login-box">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username" class="label">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="input"
            placeholder="Enter your username"
            :class="{ 'input-error': usernameError }"
            @blur="validateUsername"
            @input="clearUsernameError"
          />
          <p v-if="usernameError" class="error-message">Username is required</p>
        </div>
        <div class="input-group">
          <label for="password" class="label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="input"
            placeholder="Enter your password"
            :class="{ 'input-error': passwordError }"
            @blur="validatePassword"
            @input="clearPasswordError"
          />
          <p v-if="passwordError" class="error-message">Password is required</p>
        </div>
        <button type="submit" class="login-btn" :disabled="isButtonDisabled">
          Login
        </button>
      </form>
      <div class="text-red mt-2 " v-if="errorFromApi">
        {{ errorFromApi }}
      </div>
    </div>
  </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '~/config/firebaseConfig'; 
import Loader from '~/layouts/sub-components/Loader.vue';

export default {
  components: { Loader },
  data() {
    return {
      username: "",
      password: "",
      usernameError: false,
      passwordError: false,
      errorFromApi:'',
      isLoading:true,
    };
  },
  computed: {
    isButtonDisabled() {
      return (
        !this.username ||
        !this.password ||
        this.usernameError ||
        this.passwordError
      );
    },
  },
  mounted(){
    this.checkLoginStatus(true);
    this.isLoading = false
  },
  methods: {
    validateUsername() {
      this.usernameError = this.username.trim() === "";
    },
    validatePassword() {
      this.passwordError = this.password.trim() === "";
    },
    clearUsernameError() {
      if (this.username.trim() !== "") {
        this.usernameError = false;
      }
    },
    clearPasswordError() {
      if (this.password.trim() !== "") {
        this.passwordError = false;
      }
    },
    handleLogin() {
      this.errorFromApi=''
      // Simulate login action
      if (!this.username || !this.password) {
        return;
      }
      console.log("Logged in with", this.username, this.password);
      let email = this.username;
      let password = this.password;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
            const user = userCredential.user;
          //   console.log(user);
        //   const user = { email: this.email }; // Simulating user data (replace with your logic)
          const loginTime = new Date().toISOString(); // Store login time

          localStorage.setItem(this.$CONSTANTS.USER_KEY, JSON.stringify(user));
          localStorage.setItem(this.$CONSTANTS.LOGIN_TIME_KEY, loginTime);
          this.btn_loading = false;
          this.$router.replace({ path: "/admin" });
          // ...
        })
        .catch((error) => {
          console.log(error)
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log('err ',errorMessage);
          this.errorFromApi = errorMessage;
          this.btn_loading = false;
        });
    },
  },
};
</script>

<style scoped>
:root {
  --primary-bg-color: #4e73df;
  --secondary-bg-color: #f6f9fc;
  --tertiary-bg-color: #e0e8f9;
  --primary-text-color: #ffffff;
  --secondary-text-color: #333333;
  --tertiary-text-color: #6c757d;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--secondary-bg-color);
}

.login-box {
  background: var(--primary-bg-color);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-title {
  font-size: 2rem;
  color: var(--primary-text-color);
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

.label {
  font-size: 0.9rem;
  color: var(--secondary-text-color);
  display: block;
}

.input {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.input:focus {
  border-color: var(--primary-bg-color);
  outline: none;
}

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: var(--secondary-text-color);
  color: var(--primary-text-color);
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: var(--primary-text-color);
  color: var(--secondary-text-color);
}

.login-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .login-box {
    width: 90%;
  }
}
</style>
