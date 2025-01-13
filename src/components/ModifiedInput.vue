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
        @input="onInputBlur(modelValue, $event)"
        @change="onInputBlur(modelValue, $event)"
        :value="modelValue"
        ref="myIn"
        :type="type"
        :class="filled ? 'filled' : ''"
        class="font-medim duration-300 border-0 outline-0 bg-inherit input"
        :placeholder="label"
      />
      <button class="absolute right-4 max-w-8" @click="buttonWork">
        <img :src="button" alt="logo" class="w-full" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "modelValue",
    "errMsg",
    "label",
    "type",
    "dark",
    "modelModifiers",
    "buttonFunc",
    "button",
    "cardType",
  ],
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
      if (this.modelModifiers.changeCard) {
        this.$emit("update:cardType", this.buttonFunc(e.target.value));
        this.$emit("update:modelValue", this.splitToGroups(e.target.value));
      }
    },
    setFilled() {
      if (this.modelValue !== "") {
        this.filled = true;
      } else {
        this.filled = false;
      }
    },

    buttonWork(e) {
      e.preventDefault();
      this.buttonFunc();
    },
    splitToGroups(numberString) {
      numberString = numberString.replace(/\D/g, "");

      if (!numberString) {
        return []; // Handle empty string input
      }
      const groups = [];
      for (let i = 0; i < numberString.length; i += 4) {
        groups.push(numberString.slice(i, i + 4));
      }
      return groups.join("-");
    },
  },
};
</script>

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
