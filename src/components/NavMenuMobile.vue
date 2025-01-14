<template>
  <div
    class="absolute w-full bg-[#f7f7f7] z-40 duration-300 top-0"
    :style="{ maxHeight: state.openNav ? '' : '0px' }"
  >
    <section
      v-show="state.openNav"
      class="leading-relaxed max-w-screen-xl mx-auto min-h-screen pt-32"
    >
      <div class="mx-auto">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="space-y-3 mt-5 overflow-hidden border-b border-text-heading"
          @click="toggleFaq(index)"
        >
          <h4
            class="cursor-pointer pb-5 flex items-center justify-between text-lg text-text-heading font-medium px-4"
          >
            {{ item.title }}
            <i
              v-if="selectedFaq === index"
              class="ri-arrow-up-s-line text-5xl"
            ></i>
            <i v-else class="ri-arrow-down-s-line text-5xl"></i>
          </h4>
          <div
            v-show="selectedFaq === index"
            class="overflow-hidden duration-300 bg-white px-4"
            :style="{ maxHeight: selectedFaq === index ? '' : '0px' }"
          >
            <div>
              <a v-for="item in item.items" href="#" :key="item.title">
                <p class="text-text-heading pb-4">
                  <i :class="item.icon + ' ' + 'text-3xl mr-5'"></i
                  >{{ item.title }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import data from "/menu.json";
import { ref } from "vue";
import { useCounterStore } from "../stores/info";

const selectedFaq = ref(0);

const state = useCounterStore();

function toggleFaq(index) {
  selectedFaq.value = selectedFaq.value === index ? null : index;
}

const faqs = ref(data.menu);
</script>
