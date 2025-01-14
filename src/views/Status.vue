<template>
  <div class="px-4 pt-5">
    <h4 class="text-text-heading text-xl font-extrabold my-3">
      Delivery status
    </h4>

    <div class="bg-[#f7f7f7] px-5 py-8 rounded text-text-body font-medium">
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
        class="px-10 mx-auto w-full py-2 bg-text-heading text-white my-4 rounded"
      >
        continue
      </button>
    </RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
