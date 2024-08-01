<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

const showNavbar = computed(() => route.path !== "/", "/signup");
const showFooter = computed(() => route.path !== "/", "/signup");
</script>

<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <RouterView />
    <Footer v-if="showFooter" />
  </div>
</template>

<style scoped>

</style>
