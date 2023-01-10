<template>
  <div class="grid grid-flow-col auto-cols-auto overflow-x-auto">
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
</template>

<script>
import TheInput from "@/components/UI/TheInput.vue";
import TheSelectOption from "@/components/UI/TheSelectOption.vue";
import TheMonthDate from "@/components/UI/TheMonthDate.vue";

export default {
  components: {
    TheInput,
    TheSelectOption,
    TheMonthDate,
  },

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

  setup() {
    //Data
    let search = "";
    let account = "";
    let bank = "";
    let startingMonth = "";
    let endingMonth = "";

    //Methods
    const selectedAccount = (event) => {
      account = event;
      console.log("The selected value for Account is", account);
    };
    const selectedBank = (event) => {
      bank = event;
      console.log("The selected value for Bank is", bank);
    };
    const inputSearch = (event) => {
      console.log("Searching for:", event);
    };
    const selectedStartingMonth = (event) => {
      startingMonth = event;
      console.log("The selected starting month is:", event);
    };
    const selectedEndingMonth = (event) => {
      //Compare dates
      endingMonth = event;
      console.log("The selected ending month is:", event);
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
