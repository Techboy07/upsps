<template>
  <nav
    class="flex justify-between items-center px-5 py-2 border-b-4 border-red-700 fixed top-0 w-full bg-[#f7f7f7] z-50"
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
</template>
<script setup>
import { useCounterStore } from "../stores/info";

const state = useCounterStore();

function toggleNav() {
  state.openNav = !state.openNav;
}

function toggleSearch() {
  state.openSearch = !state.openSearch;
}
</script>
