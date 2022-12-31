<template>
  <div class="mx-16 mt-4 bg-white pt-6 px-2 mb-4">
    <!-- <div class="grid grid-cols-5 divide-x"> -->
    <!-- Filters -->
    <div class="mb-4">
      <p class="text-lg font-semibold">Transactions</p>
    </div>

    <!-- Filters -->
    <div class="grid grid-flow-col auto-cols-auto overflow-x-auto">
      <!-- overflow-x-auto -->
      <!-- Search -->
      <div class="font-normal">
        <label class="text-xs form-label inline-block">Search</label>
        <TheInput @search="inputSearch" />
      </div>

      <!-- Bank -->
      <div class="font-normal ml-2">
        <label class="text-xs form-label inline-block">Bank</label>
        <TheSelectOption
          name="bank"
          id="bank"
          :options="banks"
          @selected="selectedBank"
        />
      </div>

      <!-- Account -->
      <div class="font-normal ml-2">
        <label class="text-xs form-label inline-block">Account</label>
        <TheSelectOption
          name="account"
          id="account"
          :options="accounts"
          @selected="selectedAccount"
        />
      </div>

      <!-- Starting month -->
      <div class="font-normal ml-2">
        <label class="text-xs form-label inline-block">Starting month</label>
        <TheMonthDate @selected="selectedStartingMonth" type="month" />
      </div>

      <!-- Ending month -->
      <div class="font-normal ml-2">
        <label class="text-xs form-label inline-block">Ending month</label>
        <TheMonthDate @selected="selectedEndingMonth" type="month" />
      </div>
    </div>

    <!-- Transactions -->
    <div class="mt-4 overflow-y-auto">
      <table class="w-full text-left border-collapse">
        <!-- Transaction header -->
        <thead>
          <tr>
            <th
              class="border-t sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
            >
              <div
                class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20"
              >
                Reference
              </div>
            </th>
            <th
              class="border-t sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
            >
              <div
                class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20"
              >
                Category
              </div>
            </th>
            <th
              class="border-t sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
            >
              <div
                class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20"
              >
                Date
              </div>
            </th>
            <th
              class="border-t sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
            >
              <div
                class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20"
              >
                Amount
              </div>
            </th>
          </tr>
        </thead>
        <!-- Transactions list -->
        <TransactionsList :transactions="transactions" />
      </table>
    </div>
  </div>
</template>

<script>
import TransactionsList from "@/components/TransactionsList.vue";
import TheSelectOption from "@/components/UI/TheSelectOption.vue";
import TheInput from "@/components/UI/TheInput.vue";
import TheMonthDate from "@/components/UI/TheMonthDate.vue";

export default {
  name: "IndexPage",
  components: {
    TransactionsList,
    TheSelectOption,
    TheInput,
    TheMonthDate,
  },
  data() {
    return {
      transactions: [
        {
          id: "njiuhbn",
          reference: "No reference provided",
          category: "Advertising",
          date: "17/04/2022",
          amount: "3.0",
          currency: "EUR",
        },
        {
          id: "fghj",
          reference: "Coffee",
          category: "Vendors",
          date: "17/04/2022",
          amount: "1,923.0",
          currency: "GPB",
        },
        {
          id: "dvdf",
          reference: "Anything",
          category: "Sales and Marketing",
          date: "19/04/2022",
          amount: "7,123.0",
          currency: "EUR",
        },
        {
          id: "ijn",
          reference: "No reference provided",
          category: "Check Outflows",
          date: "18/05/2022",
          amount: "123.0",
          currency: "EUR",
        },
        {
          id: "pihn",
          reference: "No reference provided",
          category: "Refunds",
          date: "17/06/2022",
          amount: "1,023.0",
          currency: "EUR",
        },
        {
          id: "pihgrfn",
          reference: "Other thing",
          category: "Salary Taxes",
          date: "24/06/2022",
          amount: "43.0",
          currency: "GPB",
        },
        {
          id: "pi34hn",
          reference: "Something",
          category: "Tax Refund",
          date: "01/07/2022",
          amount: "12.0",
          currency: "EUR",
        },
      ],
      accounts: [
        "Account One",
        "Account Two",
        "Account Three",
        "Account Four",
        "Account Five",
      ],
      banks: ["Activo Bank", "Revolut", "Wise", "Millenium"],
      account: "",
      bank: "",
      startingMonth: "",
      endingMonth: "",
    };
  },
  methods: {
    selectedAccount(event) {
      this.account = event;
      console.log("The selected value for Account is", this.account);
    },
    selectedBank(event) {
      this.bank = event;
      console.log("The selected value for Bank is", this.bank);
    },
    inputSearch(event) {
      console.log("Searching for:", event);
    },
    selectedStartingMonth(event) {
      this.startingMonth = event;
      console.log("The selected starting month is:", event);
    },
    selectedEndingMonth(event) {
      //Compare dates
      this.endingMonth = event;
      console.log("The selected ending month is:", event);
    },
  },
};
</script>

<!-- <script setup>
const transactions = [
  {
    id: "njiuhbn",
    reference: "No reference provided",
    category: "Advertising",
    date: "17/04/2022",
    amount: "3.0",
    currency: "EUR",
  },
  {
    id: "fghj",
    reference: "Coffee",
    category: "Vendors",
    date: "17/04/2022",
    amount: "1,923.0",
    currency: "GPB",
  },
  {
    id: "dvdf",
    reference: "Anything",
    category: "Sales and Marketing",
    date: "19/04/2022",
    amount: "7,123.0",
    currency: "EUR",
  },
  {
    id: "ijn",
    reference: "No reference provided",
    category: "Check Outflows",
    date: "18/05/2022",
    amount: "123.0",
    currency: "EUR",
  },
  {
    id: "pihn",
    reference: "No reference provided",
    category: "Refunds",
    date: "17/06/2022",
    amount: "1,023.0",
    currency: "EUR",
  },
  {
    id: "pihgrfn",
    reference: "Other thing",
    category: "Salary Taxes",
    date: "24/06/2022",
    amount: "43.0",
    currency: "GPB",
  },
  {
    id: "pi34hn",
    reference: "Something",
    category: "Tax Refund",
    date: "01/07/2022",
    amount: "12.0",
    currency: "EUR",
  },
  {
    id: "njiuhbn",
    reference: "No reference provided",
    category: "Advertising",
    date: "17/04/2022",
    amount: "3.0",
    currency: "EUR",
  },
  {
    id: "fghj",
    reference: "Coffee",
    category: "Vendors",
    date: "17/04/2022",
    amount: "1,923.0",
    currency: "GPB",
  },
  {
    id: "dvdf",
    reference: "Anything",
    category: "Sales and Marketing",
    date: "19/04/2022",
    amount: "7,123.0",
    currency: "EUR",
  },
  {
    id: "ijn",
    reference: "No reference provided",
    category: "Check Outflows",
    date: "18/05/2022",
    amount: "123.0",
    currency: "EUR",
  },
  {
    id: "pihn",
    reference: "No reference provided",
    category: "Refunds",
    date: "17/06/2022",
    amount: "1,023.0",
    currency: "EUR",
  },
  {
    id: "pihgrfn",
    reference: "Other thing",
    category: "Salary Taxes",
    date: "24/06/2022",
    amount: "43.0",
    currency: "GPB",
  },
  {
    id: "pi34hn",
    reference: "Something",
    category: "Tax Refund",
    date: "01/07/2022",
    amount: "12.0",
    currency: "EUR",
  },
  {
    id: "njiuhbn",
    reference: "No reference provided",
    category: "Advertising",
    date: "17/04/2022",
    amount: "3.0",
    currency: "EUR",
  },
  {
    id: "fghj",
    reference: "Coffee",
    category: "Vendors",
    date: "17/04/2022",
    amount: "1,923.0",
    currency: "GPB",
  },
  {
    id: "dvdf",
    reference: "Anything",
    category: "Sales and Marketing",
    date: "19/04/2022",
    amount: "7,123.0",
    currency: "EUR",
  },
  {
    id: "ijn",
    reference: "No reference provided",
    category: "Check Outflows",
    date: "18/05/2022",
    amount: "123.0",
    currency: "EUR",
  },
  {
    id: "pihn",
    reference: "No reference provided",
    category: "Refunds",
    date: "17/06/2022",
    amount: "1,023.0",
    currency: "EUR",
  },
  {
    id: "pihgrfn",
    reference: "Other thing",
    category: "Salary Taxes",
    date: "24/06/2022",
    amount: "43.0",
    currency: "GPB",
  },
  {
    id: "pi34hn",
    reference: "Something",
    category: "Tax Refund",
    date: "01/07/2022",
    amount: "12.0",
    currency: "EUR",
  },
  {
    id: "njiuhbn",
    reference: "No reference provided",
    category: "Advertising",
    date: "17/04/2022",
    amount: "3.0",
    currency: "EUR",
  },
  {
    id: "fghj",
    reference: "Coffee",
    category: "Vendors",
    date: "17/04/2022",
    amount: "1,923.0",
    currency: "GPB",
  },
  {
    id: "dvdf",
    reference: "Anything",
    category: "Sales and Marketing",
    date: "19/04/2022",
    amount: "7,123.0",
    currency: "EUR",
  },
  {
    id: "ijn",
    reference: "No reference provided",
    category: "Check Outflows",
    date: "18/05/2022",
    amount: "123.0",
    currency: "EUR",
  },
  {
    id: "pihn",
    reference: "No reference provided",
    category: "Refunds",
    date: "17/06/2022",
    amount: "1,023.0",
    currency: "EUR",
  },
  {
    id: "pihgrfn",
    reference: "Other thing",
    category: "Salary Taxes",
    date: "24/06/2022",
    amount: "43.0",
    currency: "GPB",
  },
  {
    id: "pi34hn",
    reference: "Something",
    category: "Tax Refund",
    date: "01/07/2022",
    amount: "12.0",
    currency: "EUR",
  },
  {
    id: "njiuhbn",
    reference: "No reference provided",
    category: "Advertising",
    date: "17/04/2022",
    amount: "3.0",
    currency: "EUR",
  },
  {
    id: "fghj",
    reference: "Coffee",
    category: "Vendors",
    date: "17/04/2022",
    amount: "1,923.0",
    currency: "GPB",
  },
  {
    id: "dvdf",
    reference: "Anything",
    category: "Sales and Marketing",
    date: "19/04/2022",
    amount: "7,123.0",
    currency: "EUR",
  },
  {
    id: "ijn",
    reference: "No reference provided",
    category: "Check Outflows",
    date: "18/05/2022",
    amount: "123.0",
    currency: "EUR",
  },
  {
    id: "pihn",
    reference: "No reference provided",
    category: "Refunds",
    date: "17/06/2022",
    amount: "1,023.0",
    currency: "EUR",
  },
  {
    id: "pihgrfn",
    reference: "Other thing",
    category: "Salary Taxes",
    date: "24/06/2022",
    amount: "43.0",
    currency: "GPB",
  },
  {
    id: "pi34hn",
    reference: "Something",
    category: "Tax Refund",
    date: "01/07/2022",
    amount: "12.0",
    currency: "EUR",
  },
];
</script> -->

<style>
body {
  background-color: rgb(245 245 244); /* bg-stone-100 */
}
</style>
