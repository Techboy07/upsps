<template>
  <nav
    class="flex justify-between items-center px-5 py-2 border-b-4 border-red-700 fixed top-0 w-full bg-[#f7f7f7] z-50 lg:hidden"
  >
    <button class="p-2 h-10 hover:border" @click="toggleNav">
      <img v-if="state.openNav" class="h-full" src="/close_x.svg" alt="" />
      <img v-else class="h-full" src="/header-img/hamburger.svg" alt="" />
    </button>
    <div>
      <img class="h-7" src="/header-img/logo_mobile.svg" alt="" />
    </div>
    <button class="hover:border p-2 h-10" @click="toggleSearch">
      <img v-if="state.openSearch" class="h-full" src="/close_x.svg" alt="" />
      <img v-else class="h-full" src="/header-img/search.svg" alt="" />
    </button>
  </nav>
  <div class="fixed z-50 top-0 hidden lg:block w-full bg-[#f7f7f7]">
    <div class="flex py-2 justify-end gap-14 px-4">
      <div
        class="flex items-center gap-2"
        v-for="param in siteParams"
        :key="param.title"
      >
        <i :class="`${param.icon} text-lg`"></i>
        <p class="text-xs text-text-heading">{{ param.title }}</p>
      </div>
    </div>
    <nav class="w-full pl-5 lg:flex items-center gap-4">
      <div class="w-max max-w-max">
        <img src="/public/logo-sb.svg" alt="" class="w-full max-w-[248px]" />
      </div>
      <div class="w-full flex items-stretch bg-[#d8d8d8]">
        <div
          class="bg-text-heading border-r-8 border-red-600 skew-x-[-15deg] w-max text-center py-2 px-4 text-white text-sm"
        >
          {{ menu[0].title }}
        </div>
        <div
          v-for="item in menu2"
          :key="item.title"
          class="hover:bg-[#ededed] skew-x-[-15deg] w-max text-center py-2 px-5 text-sm text-text-heading"
        >
          {{ item.title }}
        </div>
        <div class="h-10 p-3">
          <img src="/header-img/search.svg" alt="" class="h-full" />
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { useCounterStore } from "../stores/info";
import data from "/menu.json";
import { ref } from "vue";

const menu = ref(data.menu).value;
const menu2 = menu.filter((elem, idx) => {
  if (idx != 0) {
    return elem;
  }
});

const siteParams = ref([
  { title: "English", icon: "ri-global-line" },
  { title: "Locations", icon: "ri-map-pin-2-line" },
  { title: "Support", icon: "ri-customer-service-2-line" },
  { title: "Informed Delivery", icon: "ri-run-line" },
  { title: "Register/Signup", icon: "" },
]).value;

const state = useCounterStore();

function toggleNav() {
  state.openNav = !state.openNav;
}

function toggleSearch() {
  state.openSearch = !state.openSearch;
}
</script>
