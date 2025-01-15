<template>
  <div>
    <select
      :id="id"
      class="w-full border-2 rounded-md bg-transparent text-text-gray focus:outline-none focus:border-text-heading focus:border-2 p-2 focus:bg-white my-2 select"
      :ref="id"
      :value="value"
      @input="handleChange"
      :class="err ? 'border-red-500' : 'border-text-heading'"
    >
      <option class="text-gray-300" value="" selected disabled>
        {{ label }}
      </option>
      <option :key="option" v-for="option in options" :value="option">
        {{ option }}
      </option>
    </select>
    <p v-if="false" class="error text-ver-error text-xs">{{ reqText }}</p>
  </div>
</template>

<script>
export default {
  props: [
    "label",
    "required",
    "id",
    "type",
    "reqText",
    "options",
    "handleChange",
    "value",
    "err",
  ],
  data: () => {
    return {
      error: "border-ver-error",
    };
  },
};
</script>

<style>
/* .select {
  -webkit-appearance: none;
} */
</style>
