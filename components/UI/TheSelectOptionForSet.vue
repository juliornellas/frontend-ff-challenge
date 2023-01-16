<template>
  <div>
    <select
      @click="selectedOption"
      class="w-full border rounded px-3 text-base font-normal text-gray-700 bg-white transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
      v-model="sel"
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
  </div>
</template>

<script>
import { ref } from "vue";

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
  setup({ selected }, { emit }) {
    let message = ref("No filter applied");
    let sel = ref(selected);

    const selectedOption = () => {
      emit("selected", sel);
    };

    return {
      sel,
      message,
      selectedOption,
    };
  },
};
</script>
