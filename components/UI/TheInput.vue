<template>
  <input
    type="text"
    class="w-full h-7 border rounded px-3 text-base font-normal text-gray-700 bg-white transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
    @keyup.enter="$emit('inputSearch', input)"
    v-model="input"
  />
</template>

<script>
import { ref } from "vue";
export default {
  name: "TheInput",
  emits: ["inputSearch"],
  setup() {
    const input = ref("");

    return {
      input,
    };
  },
};
</script>
