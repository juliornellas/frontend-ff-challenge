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
      <TheTransactionTable
        :transactions="transactions"
        :categories="categories"
      />
    </div>
  </div>
</template>

<script>
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
      id
      accountId
      categoryId
      reference
      amount
      currency
      date
    }
  }
`;

const ALL_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
      color
    }
  }
`;

export default {
  name: "TransactionsPage",
  components: {
    TheTransactionTable,
    TheFiltersTransactions,
  },

  async asyncData({ app, store }) {
    //Apollo client
    const client = app.apolloProvider.defaultClient;

    //Accounts
    const accountsResponse = await client.query({
      query: ALL_ACCOUNTS,
      prefetch: true,
    });
    const { accounts } = accountsResponse.data;

    //Transactions
    const transactionsResponse = await client.query({
      query: TRANSACTIONS,
      prefetch: true,
    });
    const { transactions } = transactionsResponse.data;

    //Categories
    const categoriesResponse = await client.query({
      query: ALL_CATEGORIES,
      prefetch: true,
    });
    const { categories } = categoriesResponse.data;

    const accountsName = new Set();
    const banks = new Set();

    accounts.forEach(({ name, bank }) => {
      accountsName.add(name);
      banks.add(bank);
    });

    const accountsArray = [...accountsName];
    const banksArray = [...banks];

    //Just for note
    // store.dispatch("accounts/setAccountsName", accountsArray);
    // store.dispatch("accounts/setBanks", banksArray);

    return {
      accountsArray,
      banksArray,
      transactions,
      categories,
    };
  },
};
</script>
