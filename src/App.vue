<script setup>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import NavMenuMobile from "./components/NavMenuMobile.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <MyHeader />
  <NavMenuMobile />
  <RouterView />
  <MyFooter />
</template>

<style scoped>
* {
  font-family: Helvetica, sans-serif, Arial;
}
</style>
