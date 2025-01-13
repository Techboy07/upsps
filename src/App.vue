<script setup>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
//import Status from "./components/Status.vue";
// import Tracking from "./components/Tracking.vue";
import Payment from "./components/Payment.vue";
import NavMenuMobile from "./components/NavMenuMobile.vue";
</script>

<template>
  <MyHeader />
  <NavMenuMobile />
  <Payment />
  <MyFooter />
</template>

<style scoped>
* {
  font-family: Helvetica, sans-serif, Arial;
}
</style>
