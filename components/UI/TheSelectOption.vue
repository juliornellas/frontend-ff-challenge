<template>
  <select
    @click="selectedOption"
    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
    v-model="selected"
  >
    <option disabled value="">{{ message }}</option>
    <option disabled></option>
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
  emits: ["selected"],
  props: {
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: false,
      default: "No filter applied",
    },
  },
  setup({ selected }) {
    let message = "No filter applied";

    const selectedOption = () => {
      $emit("selected", selected);
    };

    return {
      selected,
      message,
      selectedOption,
    };
  },
};
</script>
