<template>
  <div>
    <input
      v-model="date"
      name="date"
      :type="type"
      class="w-full border rounded px-3 text-base font-normal text-gray-700 bg-white transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none"
      @change="$emit('selected', date)"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "date",
    },
  },

  setup() {
    const date = ref("");
    return {
      date,
    };
  },
};
</script>
