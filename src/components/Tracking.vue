<script setup>
// code...
import Input from "./MyInput.vue";
</script>

<template>
  <!-- code... -->
  <div class="p-5 bg-[#f7f7f7] flex justify-between fixed top-14 w-full z-40">
    <div class="w-[217px]">
      <img src="/logo-sb.svg" alt="usps-tracking" />
    </div>
    <div>
      <p class="text-text-heading font-semibold">
        FAQs <i class="ri-arrow-right-s-line text-red-600"></i>
      </p>
    </div>
  </div>
  <div class="pt-44 pb-20">
    <h4 class="font-semibold text-text-heading w-max mx-auto text-xl">
      Track Another Package <i class="ri-add-line text-red-600"></i>
    </h4>
  </div>

  <div class="p-5 bg-[#f7f7f7]">
    <div class="mb-5">
      <h4 class="font-bold text-xl text-text-heading">Tracking Number :</h4>
      <p class="font-helv2 text-text-body">US94512106007770</p>
    </div>

    <div class="w-full h-5 bg-text-heading"></div>
    <h4 class="text-red-600 text-xl font-semibold my-5">
      We have issues with your shipping address
    </h4>

    <p class="text-text-body font-helv2">
      USPS Allows you to Redeliver your package to your address in case of
      delivery failure or any other case.
    </p>
    <p class="text-text-body font-helv2">
      You can also track the package at any time, from shipment to delivery.
    </p>
    <div>
      <h4 class="text-text-heading text-xl font-semibold my-5">
        Verify Address
      </h4>

      <p class="text-text-body font-helv2">
        First, we need to confirm your address is eligible for Informed
        Delivery.
      </p>

      <div class="space-y-5 my-5">
        <Input label="Full name" />
        <Input label="Street Address 1" />
        <Input label="Street Address 2(OPT)" />
        <Input label="City" />
        <Input label="Select State" />
        <Input label="Zip code *(OPT)" />
        <Input label="Phone Number" />
        <Input label="E-mail Address" />
      </div>
      <button class="bg-text-heading text-white px-7 py-2 mx-auto block">
        Continue
      </button>
    </div>
  </div>
</template>

<style scoped></style>
