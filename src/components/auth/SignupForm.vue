<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import lionsImage from "./../../assets/img/lions.jpg";
import axios from 'axios';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/login`, {}, {
      auth: {
        username: username.value,
        password: password.value,
      }
    });
    console.log('Login successful:', response.data);
    localStorage.setItem('username', response.data.username);
    localStorage.setItem('roles', JSON.stringify(response.data.roles));

    router.push('/dashboard');
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Invalid user. Please try again.';
    console.error('Error on login:', errorMessage);
    alert(errorMessage);
  }
};
</script>

<template>
  <div class="bg-marron-800">
    <div class="flex justify-center h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/3"
        :style="{ backgroundImage: `url(${lionsImage})` }"
      >
        <div class="flex items-center h-full px-20 ">
          <div>
            <h2 class="text-7xl font-caesar bg-ocre-950 text-ocre-50">
              ZOOTOPIA
            </h2>
            <p class="text-center text-3xl font-caesar max-w-xl mt-3 text-ocre-50 bg-ocre-950">
              NATURE RESERVE
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-5xl font-poppins font-bold text-center text-white">
              Welcome to Zootopia
            </h2>
            <p class="mt-3 text-white">Sign in to access your account</p>
          </div>
          <div class="mt-8">
            <form @submit.prevent="login">
              <div>
                <label for="username" class="block mb-2 text-sm text-white">Username</label>
                <input
                  v-model="username"
                  type="text"
                  required
                  name="username"
                  id="username"
                  placeholder="Your Username"
                  class="block w-full px-4 py-2 mt-2 text-white placeholder-gris-300 bg-transparent border border-white rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40 caret-random-50"
                />
              </div>
              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-white">Password</label>
                </div>
                <input
                  v-model="password"
                  type="password"
                  required
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="block w-full px-4 py-2 mt-2 text-white placeholder-gris-300 bg-transparent border border-white rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40 caret-random-50"
                />
              </div>
              <div class="mt-6">
                <button
                  type="submit"
                  class="bg-verde-400 font-poppins w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md hover:bg-random-50 focus:outline-none focus:bg-random-50 focus:ring focus:ring-random-50 focus:ring-opacity-50"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p class="mt-6 text-sm text-center text-gray-400">
              Don&#x27;t have an account yet?
              <a href="/register" class="text-random-50 focus:outline-none focus:underline hover:underline">
                Sign up
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
