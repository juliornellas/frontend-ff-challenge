<template>
  <table class="w-full text-left border-collapse">
    <!-- Transaction header -->
    <!-- <TheTransactionTableHeader @sort="sortTransactions" /> -->
    <TheTransactionTableHeader
      @sort="sort"
      @clean-sorted="$emit('clean-sorted', 'amount')"
      :isSortedAmount="isSortedAmount"
    />
    <!-- Transactions list -->
    <TransactionsList :transactions="transactions" :categories="categories" />
  </table>
</template>

<script>
import TransactionsList from "@/components/TransactionsList.vue";
import TheTransactionTableHeader from "./UI/TheTransactionTableHeader.vue";
// import { computed, reactive, ref } from "vue";

export default {
  emits: ["sort", "clean-sorted"],
  props: {
    transactions: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    isSortedAmount: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    TransactionsList,
    TheTransactionTableHeader,
  },
  setup(_, { emit }) {
    const sort = (e) => {
      emit("sort", e);
    };

    return {
      sort,
    };
  },
};
</script>
