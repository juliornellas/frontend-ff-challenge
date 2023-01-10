<template>
  <table class="w-full text-left border-collapse">
    <!-- Transaction header -->
    <TheTransactionTableHeader @sort="sortTransactions" />
    <!-- Transactions list -->
    <TransactionsList :transactions="data" />
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
  },
  components: {
    TransactionsList,
    TheTransactionTableHeader,
  },

  setup(props) {
    const data = props.transactions;

    let sort = false;

    const sortTransactions = () => {
      sort = !sort;
      data.sort((a, b) => {
        return sort
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      });
    };

    return {
      sortTransactions,
      data,
    };
  },
};
</script>
