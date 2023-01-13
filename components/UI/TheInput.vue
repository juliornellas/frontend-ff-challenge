<template>
  <input
    type="text"
    class="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
    @keyup.enter="$emit('input', input)"
    v-model="input"
  />
</template>

<script>
export default {
  setup() {
    const input = "";

    return {
      input,
    };
  },
};
</script>
