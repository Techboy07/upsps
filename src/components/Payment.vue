<template>
  <div class="pt-28 px-4 pb-32">
    <h4 class="text-text-heading text-3xl font-helv3">Online Payment</h4>

    <p class="text-text-body font-helv2 my-3">
      For redelivery, we need to charge some service fees. Your package will be
      re-delivered after payment
    </p>

    <p class="font-bold">lump sum: $0.3</p>

    <div class="mt-5">
      <div>
        <p class="text-text-body font-helv2 mb-1">
          Cardholder <span class="text-red-600">*</span>
        </p>
        <Input class="" />
      </div>
      <div class="my-4">
        <p class="text-text-body font-helv2 mb-1">
          Card Number <span class="text-red-600">*</span>
        </p>
        <ModifiedInput
          type="text"
          label="0000 0000 0000 0000"
          :buttonFunc="detectCreditCardIssuer"
          v-model.changeCard="store.cardnum"
          v-model:cardType="store.cardImage"
          :button="store.cardImage"
        />
        <div class="flex space-x-1 relative top-2 justify-end">
          <div class="w-10 py-1 px-2" v-for="pay in payments" :key="pay">
            <img :src="pay" alt="logo" />
          </div>
        </div>
      </div>

      <!--   errMsg="Input a valid card number" -->
      <div class="flex gap-5 my-4">
        <div>
          <p class="text-text-body font-helv2 mb-1">
            Expire Date <span class="text-red-600">*</span>
          </p>
          <Input label="MM/YY" />
        </div>
        <div>
          <p class="text-text-body font-helv2 mb-1">
            Security Code(CVV) <span class="text-red-600">*</span>
          </p>
          <Input label="123" />
        </div>
      </div>
    </div>

    <button class="bg-text-heading text-white px-7 py-2 rounded-md">
      Submit
    </button>
  </div>
</template>

<script setup>
import Input from "./MyInput.vue";
import ModifiedInput from "./ModifiedInput.vue";
import { ref } from "vue";

import { useCounterStore } from "/src/stores/info";

const store = useCounterStore();

const payments = ref([
  "/pay_imgs/visa.png",
  "/pay_imgs/mc.png",
  "/pay_imgs/amex.png",
  "/pay_imgs/discover.png",
]).value;

function detectCreditCardIssuer(cardNumber) {
  // Remove any non-digit characters
  cardNumber = cardNumber.replace(/\D/g, "");

  // Check for Mastercard
  if (
    new RegExp("^5[1-5]").test(cardNumber) ||
    new RegExp(/^222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720/).test(cardNumber)
  ) {
    return "/pay_imgs/mc.png";
  }

  // Check for Visa
  if (new RegExp(/^4/).test(cardNumber)) {
    return "/pay_imgs/visa.png";
  }

  // Check for American Express (Amex)
  if (new RegExp(/^3[47]/).test(cardNumber)) {
    return "/pay_imgs/amex.png";
  }
  // Check for Discover
  if (new RegExp(/^6(?:011|5[0-9]{2}|4[4-9]|22[1-9])/g).test(cardNumber)) {
    return "/pay_imgs/discover.png";
  }
  // If none of the above conditions match, return u0nknown
  return "/pay_imgs/credit-card-solid-24.png";
}
</script>
