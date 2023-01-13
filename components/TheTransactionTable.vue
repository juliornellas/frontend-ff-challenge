<template>
  <table class="w-full text-left border-collapse">
    <!-- Transaction header -->
    <TheTransactionTableHeader @sort="sortTransactions" />
    <!-- Transactions list -->
    <TransactionsList :transactions="transactions" :categories="categories" />
  </table>
</template>

<script>
import TransactionsList from "@/components/TransactionsList.vue";
import TheTransactionTableHeader from "./UI/TheTransactionTableHeader.vue";

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

  setup({ transactions, categories }) {
    let sort = false;

    const sortTransactions = () => {
      sort = !sort;
      transactions.sort((a, b) => {
        return sort
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      });
    };

    return {
      sortTransactions,
      transactions,
      categories,
    };
  },
};
</script>
