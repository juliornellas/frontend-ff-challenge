<template>
  <table class="w-full text-left border-collapse">
    <!-- Transaction header -->
    <!-- <TheTransactionTableHeader @sort="sortTransactions" /> -->
    <TheTransactionTableHeader />
    <!-- Transactions list -->
    <TransactionsList :transactions="transactions" :categories="categories" />
  </table>
</template>

<script>
import TransactionsList from "@/components/TransactionsList.vue";
import TheTransactionTableHeader from "./UI/TheTransactionTableHeader.vue";
import { computed, reactive, ref } from "vue";

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
  components: {
    TransactionsList,
    TheTransactionTableHeader,
  },

  // setup({ transactions, categories }) {
  //   let filtered = ref([...transactions]);

  //   return {
  //     filtered,
  //     categories,
  //   };
  // },
};
</script>
