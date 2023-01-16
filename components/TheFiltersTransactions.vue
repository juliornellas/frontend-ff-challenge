<template>
  <div class="grid grid-flow-col auto-cols-auto overflow-x-auto">
    <!-- Search -->
    <div class="font-normal">
      <label class="text-xs form-label inline-block">Search</label>
      <TheInput
        class="h-8"
        placeholder="Search by reference, amount or currency"
        @inputSearch="inputSearch"
      />
    </div>

    <!-- Bank -->
    <div class="font-normal ml-2">
      <label class="text-xs form-label inline-block">Bank</label>
      <TheSelectOptionForSet
        class="h-8"
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
        class="h-8"
        name="account"
        id="account"
        :options="accounts"
        @selected="selectedAccount"
      />
    </div>

    <!-- Starting month -->
    <div class="font-normal ml-2">
      <label class="text-xs form-label inline-block">Starting month</label>
      <TheMonthDate
        class="h-8"
        @selected="selectedStartingMonth"
        type="month"
      />
    </div>

    <!-- Ending month -->
    <div class="font-normal ml-2">
      <label class="text-xs form-label inline-block">Ending month</label>
      <TheMonthDate class="h-8" @selected="selectedEndingMonth" type="month" />
    </div>
  </div>
</template>

<script>
import TheInput from "@/components/UI/TheInput.vue";
import TheSelectOption from "@/components/UI/TheSelectOption.vue";
import TheSelectOptionForSet from "@/components/UI/TheSelectOptionForSet.vue";
import TheMonthDate from "@/components/UI/TheMonthDate.vue";

import { ref } from "vue";
export default {
  components: {
    TheInput,
    TheSelectOption,
    TheSelectOptionForSet,
    TheMonthDate,
  },

  emits: [
    "inputSearch",
    "searchAccount",
    "searchBank",
    "inputSearch",
    "searchStartingMonth",
    "searchEndingMonth",
  ],

  props: {
    banks: {
      type: Array,
      required: true,
    },
    accounts: {
      type: Array,
      required: true,
    },
  },

  setup(_, { emit }) {
    //Data
    let search = ref("");
    let account = ref("");
    let bank = ref("");
    let startingMonth = ref("");
    let endingMonth = ref("");

    //Methods
    const selectedAccount = (event) => {
      account.value = event;
      emit("searchAccount", account.value);
    };
    const selectedBank = (event) => {
      bank.value = event;
      emit("searchBank", bank.value);
    };
    const inputSearch = (event) => {
      emit("inputSearch", event);
    };
    const selectedStartingMonth = (event) => {
      startingMonth.value = event;
      emit("searchStartingMonth", startingMonth.value);
    };
    const selectedEndingMonth = (event) => {
      endingMonth.value = event;
      emit("searchEndingMonth", endingMonth.value);
    };

    return {
      // Data
      search,
      account,
      bank,
      startingMonth,
      endingMonth,
      //Methods
      selectedAccount,
      selectedBank,
      inputSearch,
      selectedStartingMonth,
      selectedEndingMonth,
    };
  },
};
</script>
