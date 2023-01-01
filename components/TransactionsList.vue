<template>
  <tbody class="align-baseline h-100">
    <tr v-for="transaction in transactions" :key="transaction.id">
      <td
        class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal dark:text-sky-400"
      >
        {{ transaction.reference }}
      </td>
      <td
        class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal dark:text-sky-400"
      >
        <span
          class="border border-none rounded-md p-2"
          :style="{ 'background-color': transaction.category.color }"
        >
          {{ transaction.category.name }}
        </span>
      </td>
      <td
        class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal dark:text-sky-400"
      >
        {{ transaction.date }}
      </td>
      <td
        class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal dark:text-sky-400"
      >
        {{ transaction.amount }}
        <span class="text-xs text-gray-400">{{ transaction.currency }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { inject } from "vue";
export default {
  name: "TransactionsList",
  // props: {
  //   transactions: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  setup() {
    const transactions = inject("transactions");

    return {
      transactions,
    };
  },
};
</script>
