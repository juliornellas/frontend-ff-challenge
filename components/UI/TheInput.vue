<template>
  <input
    type="text"
    id="search"
    name="search"
    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    placeholder="Search by bank, account, reference, category, date, amount, currency..."
    @keyup.enter="$emit('search', search)"
    v-model="search"
  />
</template>

<script>
export default {
  setup() {
    const search = "";

    return {
      search,
    };
  },
};
</script>
