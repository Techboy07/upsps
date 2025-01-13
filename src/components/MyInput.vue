<template>
  <div>
    <div
      :class="
        !filled ? 'border-2 border-main-red ' : 'border-2 border-text-heading '
      "
      class="relative px-4 rounded-md opacity-70 text-main-text input-wrapper flex flex-col-reverse py-2 justify-center"
      @click="focusInput"
      @mouseleave="setFilled"
    >
      <input
        :placeholder="label"
        @input="onInputBlur(modelValue, $event)"
        @change="onInputBlur(modelValue, $event)"
        :value="modelValue"
        ref="myIn"
        :type="type"
        :class="filled ? 'filled' : ''"
        class="font duration-300 border-0 outline-0 bg-inherit input"
      />

      <!-- <div class="text-main-red flex" v-if="!filled">
  <i class="ri-close-circle-line"></i>
      <p>{{ errMsg }}</p>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["modelValue", "errMsg", "label", "type", "modelModifiers"],
  data() {
    return { filled: true };
  },
  methods: {
    focusInput() {
      this.$refs.myIn.focus();
      this.setFilled();
    },
    onInputBlur(value, e) {
      this.setFilled();
      this.$emit("update:modelValue", e.target.value);
    },
    setFilled() {
      if (this.modelValue !== "") {
        this.filled = true;
      } else {
        this.filled = false;
      }
    },
  },
};
</script>
v

<style>
.input-wrapper .input {
  @apply w-full;
}

.input-wrapper .input:focus ~ .label {
  @apply text-[0.8rem] top-0;
}
.input-wrapper .filled ~ .label {
  @apply text-[0.8rem] top-0;
}
</style>
