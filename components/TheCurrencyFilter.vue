<template>
  <div>
    <div class="flex items-end">
      <a
        v-if="curr"
        href="#"
        class="mr-2 text-gray-500 text-xs p-2 border rounded"
        @click.prevent="cleanCurrency"
      >
        Clean currency filter
      </a>
      <button
        @click="currencyOption('EUR')"
        class="border rounded px-4 py-1 hover:border-green-500"
        :class="curr === 'EUR' ? 'border-green-600' : ''"
      >
        <font-awesome-icon icon="fa-solid fa-euro-sign" />
      </button>
      <button
        @click="currencyOption('GBP')"
        class="ml-2 border rounded px-4 py-1 hover:border-green-500"
        :class="curr === 'GBP' ? 'border-green-600' : ''"
      >
        <font-awesome-icon icon="fa-solid fa-sterling-sign" />
      </button>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";

export default {
  name: "TheCurrencyOption",
  emits: ["currencyOption", "cleanCurrency"],
  props: {
    currency: {
      type: String,
      required: false,
    },
  },
  setup({ currency }, { emit }) {
    let curr = ref("");

    let eurSelected = computed(() => {
      curr.value === "EUR" ? "border-green-600" : "";
    });

    let gbpSelected = computed(() => {
      curr.value === "GBP" ? "border-green-600" : "";
    });

    const currencyOption = (e) => {
      curr.value = e;
      emit("currencyOption", e);
    };
    const cleanCurrency = () => {
      curr.value = "";
      emit("cleanCurrency");
    };
    return {
      curr,
      eurSelected,
      gbpSelected,
      currencyOption,
      cleanCurrency,
    };
  },
};
</script>
