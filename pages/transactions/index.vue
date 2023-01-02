<template>
  <div>
    <!-- Header filters -->
    <div class="mb-4">
      <p class="text-lg font-semibold">Transactions</p>
    </div>

    <!-- Filters -->
    <TheFiltersTransactions :banks="banks" :accounts="accounts" />

    <!-- Transactions -->
    <div class="mt-4 overflow-y-auto">
      <TheTransactionTable />
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import TheTransactionTable from "@/components/TheTransactionTable.vue";
import TheFiltersTransactions from "@/components/TheFiltersTransactions.vue";

export default {
  name: "IndexPage",
  components: {
    TheTransactionTable,
    TheFiltersTransactions,
  },
  setup() {
    //Data
    //Dummy data
    const transactions = [
      {
        id: "njiuhbn",
        reference: "No reference provided",
        category: {
          name: "Advertising",
          color: "#7048a3",
        },
        date: "17/04/2022",
        amount: "3.0",
        currency: "EUR",
      },
      {
        id: "fghj",
        reference: "Coffee",
        category: {
          name: "Contractors",
          color: "#f6f2ab",
        },
        date: "17/04/2022",
        amount: "1,923.0",
        currency: "GPB",
      },
      {
        id: "dvdf",
        reference: "Anything",
        category: {
          name: "Company Investments",
          color: "#958e80",
        },
        date: "19/04/2022",
        amount: "7,123.0",
        currency: "EUR",
      },
      {
        id: "ijn",
        reference: "No reference provided",
        category: {
          name: "Payroll and Consultants",
          color: "#f6f2ab",
        },
        date: "18/05/2022",
        amount: "123.0",
        currency: "EUR",
      },
      {
        id: "pihn",
        reference: "No reference provided",
        category: {
          name: "Rent",
          color: "#ffbf84",
        },
        date: "17/06/2022",
        amount: "1,023.0",
        currency: "EUR",
      },
      {
        id: "pihgrfn",
        reference: "Other thing",
        category: {
          name: "Salary Taxes",
          color: "#f6f2ab",
        },
        date: "24/06/2022",
        amount: "43.0",
        currency: "GPB",
      },
      {
        id: "pi34hn",
        reference: "Something",
        category: {
          name: "Tax Refund",
          color: "#acdcff",
        },
        date: "01/07/2022",
        amount: "12.0",
        currency: "EUR",
      },
    ];
    const accounts = [
      "Account One",
      "Account Two",
      "Account Three",
      "Account Four",
      "Account Five",
    ];
    const banks = ["Activo Bank", "Revolut", "Wise", "Millenium"];

    //Provide
    provide("transactions", transactions);

    return {
      //Data
      transactions,
      accounts,
      banks,
    };
  },
};
</script>
