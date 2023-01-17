<template>
  <div class="py-4">
    <div class="flex items-center justify-center mb-4 font-bold">
      Transaction Details
    </div>
    <div class="border rounded mx-4 p-2 shadow-sm">
      <div class="mt-2">
        <h3 class="block font-bold">Bank</h3>
        <p class="mt-2 text-gray-600">{{ account.bank }}</p>
      </div>
      <div class="mt-2">
        <h3 class="block font-bold">Account</h3>
        <p class="mt-2 text-gray-600">{{ account.name }}</p>
      </div>
      <div class="mt-2">
        <h3 class="block font-bold">Reference</h3>
        <p class="mt-2 text-gray-600">
          {{ transaction.reference || "No reference" }}
        </p>
      </div>
      <div class="mt-2">
        <h3 class="block font-bold">Amount</h3>
        <p class="mt-2 text-gray-600">
          {{ transaction.amount }} {{ transaction.currency }}
        </p>
      </div>
      <div class="mt-2">
        <h3 class="block font-bold">Date</h3>
        <p class="mt-2 text-gray-600">{{ transaction.date | date }}</p>
      </div>
      <div class="mt-2">
        <h3 class="block">
          <span class="font-bold"> Category </span>
          <TheButton
            class="ml-2 text-xs text-gray-500 px-2 py-1"
            :class="show ? 'hover:bg-gray-300' : 'hover:bg-green-300'"
            @clicked="showOrHide"
          >
            <template>
              {{ show ? "Cancel" : "New category" }}
            </template>
          </TheButton>
        </h3>
        <div v-if="!show">
          <TheSelectOption
            :options="categoriesName"
            :selected="category.name"
            class="mt-2 shadow-md py-1.5"
            @selected="selectedOption"
          ></TheSelectOption>
        </div>
        <div v-else class="mt-2">
          <TheInput
            placeholder="Tap here and press ENTER to create a new category"
            class="w-full border border rounded px-2 py-1 shadow-md"
            @inputSearch="inputCreate"
          />
          <div class="mt-2 flex align-center justify-start">
            <label for="pick-color">Choose the category color:</label>
            <input
              class="ml-2"
              type="color"
              :value="category.color ? '#' + category.color : ''"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly my-4">
      <nuxt-link
        class="border rounded px-8 py-2 hover:bg-gray-100 shadow-md hover:shadow-lg"
        to="/transactions"
        >Back</nuxt-link
      >
      <TheButton class="px-8 py-2 hover:bg-green-200">
        <template> Save </template>
      </TheButton>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { ref } from "vue";

const TRANSACTION = gql`
  query getTransaction($id: ID!) {
    transaction(id: $id) {
      id
      reference
      amount
      currency
      date
      accountId
      updatedAt
      categoryId
    }
  }
`;

const CATEGORY = gql`
  query getCategory($id: ID!) {
    category(id: $id) {
      name
      color
    }
  }
`;

const ACCOUNT = gql`
  query getAccount($id: ID!) {
    account(id: $id) {
      name
      bank
    }
  }
`;

export default {
  async asyncData({ app, params }) {
    //Apollo client
    const client = app.apolloProvider.defaultClient;

    const categories = [...params.data.categories];

    //Get categories name
    const categoriesName = categories.map((category) => category.name);

    //Transaction
    const transactionResponse = await client.query({
      query: TRANSACTION,
      variables: {
        id: params.data.transaction,
      },
      prefetch: true,
    });
    const { transaction } = transactionResponse.data;

    //Get Category
    const categoryResponse = await client.query({
      query: CATEGORY,
      variables: {
        id: transaction.categoryId,
      },
      prefetch: true,
    });
    const { category } = categoryResponse.data;

    //Get Account
    const accountResponse = await client.query({
      query: ACCOUNT,
      variables: {
        id: transaction.accountId,
      },
      prefetch: true,
    });
    const { account } = accountResponse.data;

    return {
      transaction,
      category,
      account,
      categories,
      categoriesName,
    };
  },

  setup() {
    let show = ref(false);
    let newCategory = "";

    const showOrHide = () => {
      show.value = !show.value;
    };

    const selectedOption = (e) => {
      newCategory = e.value;
    };

    const inputCreate = (e) => {
      console.log("Input for create category", e);
    };

    return {
      show,
      newCategory,
      showOrHide,
      selectedOption,
      inputCreate,
    };
  },
};
</script>
