<template>
  <tbody class="align-baseline h-100">
    <tr v-for="transaction in data" :key="transaction.id">
      <td
        class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal"
        :class="transaction.reference || 'text-gray-400'"
      >
        {{ transaction.reference || "No reference" }}
      </td>
      <td class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal">
        <span
          class="border border-none rounded-md p-2"
          :style="{ 'background-color': transaction?.category?.color }"
        >
          {{ transaction?.category?.name }}
        </span>
      </td>
      <td class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal">
        {{ transaction.date | date }}
      </td>
      <td class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal">
        {{ transaction.amount }}
        <span class="text-xs text-gray-400">{{ transaction.currency }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
// import { computed } from "vue";
// import { inject } from "vue";
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  name: "TransactionsList",
  // setup() {
  //   const transactions = inject("transactions");

  //   return {
  //     transactions,
  //   };
  // },

  setup() {
    const data = "";

    return {
      data,
    };
  },

  created() {
    this.data = this.transactions;
    console.log("DATA TRANSACTIONS", this.data);
  },
};
</script>
