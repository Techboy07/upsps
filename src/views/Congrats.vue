<template>
  <div
    :class="dark ? 'sm:bg-[rgba(0,0,0,0.8)]  sm:p-20' : ''"
    class="self-start max-w-[450px] mx-auto my-20 mt-32 px-5"
  >
    <div class="w-24 mx-auto mb-5 my-auto">
      <svg
        class="fill-main-red"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
        ></path>
      </svg>
    </div>

    <h3
      :class="
        dark
          ? 'text-white text-3xl font-bold mb-5'
          : 'text-3xl font-medium mb-7 text-center'
      "
    >
      Congratulations !
    </h3>
    <p class="text-gray-500 font-medium my-5 text-center">
      Your info has been successfully updated!
    </p>

    <div class="mb-10 space-y-5">
      <!--  <h3
          :class="
            dark
              ? 'text-white text-3xl font-bold mb-5'
              : 'text-xl font-semibold mb-5'
          "
        >
          Payment info
        </h3>
        <div class="border-2 px-5 py-3 rounded flex space-x-5 items-center">
          <img :src="store.cardImage" alt="logo" class="w-10" />
          <p>**** **** **** {{ store.cardnum.substring(15, 19) }}</p>
          <p>{{ store.month + "/" + store.year }}</p>
       </div>-->
      <a href="/">
        <button
          class="px-10 mx-auto w-full py-2 bg-text-heading text-white my-4 rounded"
        >
          continue
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
//import RedButton from "/componnts/RedButton.vue";
import { useCounterStore } from "/src/stores/info";
import { ref } from "vue";
const dark = ref(false);
const store = useCounterStore();
</script>

<style lang="scss" scoped></style>
