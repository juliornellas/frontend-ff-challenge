<template>
  <tbody class="align-baseline h-100">
    <tr v-for="transaction in transactions" :key="transaction.id">
      <!-- @click="transactionDetails(transaction)" -->
      <td
        class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal"
        :class="transaction.reference || 'text-gray-400'"
      >
        <nuxt-link
          :to="{
            name: 'transactions-details',
            params: {
              data: { transaction: transaction.id, categories: categories },
            },
          }"
        >
          {{ transaction.reference || "No reference" }}
        </nuxt-link>
      </td>
      <td class="py-4 pl-2 font-mono font-medium text-xs whitespace-normal">
        <span
          class="border border-none rounded-md p-2"
          :style="{ 'background-color': transaction?.category?.color }"
        >
          {{ transaction?.categoryName }}
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
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
  name: "TransactionsList",
};
</script>
