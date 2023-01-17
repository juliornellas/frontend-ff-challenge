<template>
  <div>
    <!-- Header filters -->
    <div class="mb-4 flex justify-between">
      <div>
        <p class="text-lg font-semibold">Transactions</p>
      </div>
      <div class="flex items-end">
        <a
          v-if="currency"
          href="#"
          class="mr-2 text-gray-500 text-xs p-2 border rounded"
          @click.prevent="cleanCurrency"
        >
          Clean currency filter
        </a>
        <button
          @click="currencyOption('EUR')"
          class="border rounded px-4 py-1 hover:border-green-500"
          :class="currency === 'EUR' ? 'border-green-600' : ''"
        >
          <font-awesome-icon icon="fa-solid fa-euro-sign" />
        </button>
        <button
          @click="currencyOption('GBP')"
          class="ml-2 border rounded px-4 py-1 hover:border-green-500"
          :class="currency === 'GBP' ? 'border-green-600' : ''"
        >
          <font-awesome-icon icon="fa-solid fa-sterling-sign" />
        </button>
      </div>
    </div>

    <!-- Filters -->
    <TheFiltersTransactions
      @inputSearch="inputSearch"
      @searchAccount="searchAccount"
      @searchBank="searchBank"
      @searchStartingMonth="searchStartingMonth"
      @searchEndingMonth="searchEndingMonth"
      :banks="banksOptions"
      :accounts="accountsOptions"
    />

    <!-- Transactions -->
    <div class="mt-4 overflow-y-auto">
      <TheTransactionTable
        :transactions="filtered"
        :categories="categories"
        @sort="sort"
      />
    </div>

    <hr />
    <ThePagination
      @nextPage="nextPage"
      @previousPage="previousPage"
      @goToPage="goToPage"
      :actual="actualPage"
    ></ThePagination>
  </div>
</template>

<script>
import TheTransactionTable from "@/components/TheTransactionTable.vue";
import TheFiltersTransactions from "@/components/TheFiltersTransactions.vue";
import ThePagination from "@/components/UI/ThePagination.vue";
import {
  FILTERED_TRANSACTIONS,
  ALL_ACCOUNTS,
  ALL_CATEGORIES,
} from "~/api/queries";

export default {
  name: "TransactionsPage",
  components: {
    TheTransactionTable,
    TheFiltersTransactions,
    ThePagination,
  },

  // async asyncData({ app, store }) {
  //   //Apollo client
  //   const client = app.apolloProvider.defaultClient;

  //   //Accounts
  //   const accountsResponse = await client.query({
  //     query: ALL_ACCOUNTS,
  //     prefetch: true,
  //   });
  //   const { accounts } = accountsResponse.data;

  //   //Transactions
  //   const transactionsResponse = await client.query({
  //     query: TRANSACTIONS,
  //     prefetch: true,
  //   });
  //   const { transactions } = transactionsResponse.data;

  //   //Categories
  //   const categoriesResponse = await client.query({
  //     query: ALL_CATEGORIES,
  //     prefetch: true,
  //   });
  //   const { categories } = categoriesResponse.data;

  //   const accountsName = new Set();
  //   const banks = new Set();

  //   accounts.forEach(({ name, bank }) => {
  //     accountsName.add(name);
  //     banks.add(bank);
  //   });

  //   const accountsArray = [...accountsName];
  //   const banksArray = [...banks];

  //   //Just for note
  //   // store.dispatch("accounts/setAccountsName", accountsArray);
  //   // store.dispatch("accounts/setBanks", banksArray);

  //   return {
  //     accountsArray,
  //     banksArray,
  //     transactions,
  //     categories,
  //   };
  // },

  apollo: {
    filteredTransactions: {
      query: FILTERED_TRANSACTIONS,
      variables() {
        return {
          filter: this.filter,
          skip: this.skip,
          take: this.take,
          accountId: this.accountId,
          currency: this.currency,
          ordeyBy: {
            date: this.orderBy,
          },
        };
      },
    },
    accounts: {
      query: ALL_ACCOUNTS,
      prefetch: true,
    },
    categories: {
      query: ALL_CATEGORIES,
      prefetch: true,
    },
  },

  data() {
    return {
      filter: null,
      skip: 0,
      take: 10,
      ordeyBy: "asc",
      accountId: "",
      accountsName: [],
      banksName: [],
      currency: "",
    };
  },

  computed: {
    filtered() {
      return this.filteredTransactions;
    },
    accountsOptions() {
      console.log("ACCOUNTS options", this.accounts);
      const names = [];
      this.accounts.forEach(({ name, id }) => {
        names.push({ name, id });
      });
      console.log("accounts options", names);
      return (this.accountsName = [...names]);
    },
    banksOptions() {
      console.log("BANKS options", this.accounts);
      const names = new Set();
      this.accounts.forEach(({ bank }) => {
        names.add(bank);
      });
      console.log("banks options", names);
      return (this.banksName = [...names]);
    },
    actualPage() {
      return (this.skip + this.take) / this.take;
    },
  },

  methods: {
    inputSearch(e) {
      this.filter = e;
      this.skip = 0;
      this.take = 10;
    },
    searchAccount(e) {
      this.accountId = e;
    },
    searchBank(e) {
      console.log("Search for bank", e);
    },
    searchStartingMonth(e) {
      console.log("Search for Starting month", e);
    },
    searchEndingMonth(e) {
      console.log("Search for Ending month", e);
    },
    nextPage() {
      return (this.skip += this.take);
    },
    previousPage() {
      return this.skip >= 10 && (this.skip -= this.take);
    },
    goToPage(e) {
      return (this.skip = (e - 1) * this.take);
    },
    sort() {
      console.log("SORT", this.ordeyBy === "asc");
      return this.ordeyBy === "asc"
        ? (this.ordeyBy = "desc")
        : (this.ordeyBy = "asc");
    },
    currencyOption(e) {
      return (this.currency = e);
    },
    cleanCurrency() {
      this.currency = "";
    },
  },
};
</script>
