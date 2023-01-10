<template>
  <table class="w-full text-left border-collapse">
    <!-- Transaction header -->
    <TheTransactionTableHeader />
    <!-- Transactions list -->
    <TransactionsList :transactions="transactions" />
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
};
</script>
