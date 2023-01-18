<template>
  <div>
    <!-- Header filters -->
    <div class="mb-4 flex justify-between">
      <div>
        <p class="text-lg font-semibold">Transactions</p>
      </div>
      <TheCurrencyFilter
        :currency="currency"
        @currencyOption="currencyOption"
        @cleanCurrency="cleanCurrency"
      ></TheCurrencyFilter>
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
        @clean-sorted="cleanSorted"
        :isSortedAmount="sortedAmount"
      />
    </div>

    <hr />
    <ThePagination
      @nextPage="nextPage"
      @previousPage="previousPage"
      @goToPage="goToPage"
      :actual="actualPage"
      :hasPages="hasPages"
    ></ThePagination>
  </div>
</template>

<script>
import TheTransactionTable from "@/components/TheTransactionTable.vue";
import TheFiltersTransactions from "@/components/TheFiltersTransactions.vue";
import ThePagination from "@/components/UI/ThePagination.vue";
import TheCurrencyFilter from "@/components/TheCurrencyFilter.vue";
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
    TheCurrencyFilter,
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
          // startingDate: this.startingDate,
          // endingDate: this.endingDate,
          // orderBy: {
          //   date: this.orderByDate,
          //   amount: this.orderByAmount,
          // },
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
      orderByDate: "desc",
      orderByAmount: "",
      accountId: "",
      accountsName: [],
      banksName: [],
      currency: "",
      sortedAmount: false,
      startingDate: "",
      endingDate: "",
    };
  },

  computed: {
    filtered() {
      if (this.orderByAmount === "asc") {
        console.log("Get into computed > filtered > amount > DESC");
        const sorted = this.filteredTransactions.sort((a, b) => {
          return +b.amount - +a.amount;
        });
        console.log("Sorted", sorted);
        return sorted;
      } else if (this.orderByAmount === "desc") {
        console.log("Get into computed > filtered > amount > DESC");
        const sorted = this.filteredTransactions.sort((a, b) => {
          return +a.amount - +b.amount;
        });
        console.log("Sorted", sorted);
        return sorted;
      } else {
        console.log("Cleaned amount filter");
        return this.filteredTransactions;
      }
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
      if (this.filtered < this.skip) {
        this.skip = 0;
      }
      return (this.skip + this.take) / this.take;
    },
    hasPages() {
      return this.filtered.length === 10;
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
    sort(e) {
      if (e === "amount") {
        console.log("Order By Amount");
        this.sortedAmount = true;
        if (this.orderByAmount === "") {
          return (this.orderByAmount = "asc");
        } else if (this.orderByAmount === "asc") {
          return (this.orderByAmount = "desc");
        } else {
          return (this.orderByAmount = "asc");
        }
      }
      if (e === "date") {
        console.log("Order By Date");
        return this.orderByDate === "asc"
          ? (this.orderByDate = "desc")
          : (this.orderByDate = "asc");
      }
    },
    cleanSorted(e) {
      if (e === "amount") {
        this.sortedAmount = false;
        this.orderByAmount = "";
      }
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
