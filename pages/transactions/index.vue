<template>
  <div>
    <!-- Header filters -->
    <div class="mb-4">
      <p class="text-lg font-semibold">Transactions</p>
    </div>

    <!-- Filters -->
    <TheFiltersTransactions :banks="banksArray" :accounts="accountsArray" />

    <!-- Transactions -->
    <div class="mt-4 overflow-y-auto">
      <TheTransactionTable :transactions="transactions" />
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import TheTransactionTable from "@/components/TheTransactionTable.vue";
import TheFiltersTransactions from "@/components/TheFiltersTransactions.vue";
import gql from "graphql-tag";

const ALL_ACCOUNTS = gql`
  query getAccounts {
    accounts {
      id
      name
      bank
    }
  }
`;

const TRANSACTIONS = gql`
  query getTransactions {
    transactions {
      reference
      amount
      currency
      date
    }
  }
`;

export default {
  name: "IndexPage",
  components: {
    TheTransactionTable,
    TheFiltersTransactions,
  },

  // apollo: {
  //   accounts: {
  //     query: ALL_ACCOUNTS,
  //     prefetch: true,
  //   },
  // },

  async asyncData({ app, store }) {
    const client = app.apolloProvider.defaultClient;

    const accountsResponse = await client.query({
      query: ALL_ACCOUNTS,
      prefetch: true,
    });

    const { accounts } = accountsResponse.data;

    const transactionsResponse = await client.query({
      query: TRANSACTIONS,
      prefetch: true,
    });

    const { transactions } = transactionsResponse.data;
    console.log("TRANSACTIONS", transactions);
    // console.log("RES ASYNCDATA", accounts);

    const accountsName = new Set();
    const banks = new Set();

    accounts.forEach(({ name, bank }) => {
      accountsName.add(name);
      banks.add(bank);
    });

    // console.log("SET BANKS", banks);
    // console.log("SET ACCOUNTS", accountsName);

    const accountsArray = [...accountsName];
    const banksArray = [...banks];

    store.dispatch("accounts/setAccountsName", accountsArray);
    store.dispatch("accounts/setBanks", banksArray);

    return {
      accountsArray,
      banksArray,
      transactions,
    };
  },
};
</script>
