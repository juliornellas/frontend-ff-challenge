<template>
  <select
    @click="$emit('selected', selected)"
    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    v-model="selected"
  >
    <option>{{ selected }}</option>
    <option></option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
      :name="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: ["options"],
  setup() {
    const selected = "No filter applied";
    return {
      selected,
    };
  },
};
</script>
