<template>
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
          class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20 text-right"
        >
          Category
        </div>
      </th>
      <th
        class="border-t sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
      >
        <div
          class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20 text-right"
          @click="$emit('sort', 'date')"
        >
          Date
          <span class="ml-4">
            <font-awesome-icon icon="fa-solid fa-sort" />
          </span>
        </div>
      </th>
      <th
        class="border-t sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300"
      >
        <div
          class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20 text-right"
        >
          <span
            v-if="isSortedAmount"
            class="border rounded-full px-2 py-1 mr-2 hover:border-red-500 hover:text-red-500"
            @click="cleanSorted('amount')"
          >
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </span>
          Amount
          <span @click="$emit('sort', 'amount')">
            <span class="ml-4">
              <font-awesome-icon icon="fa-solid fa-sort" />
            </span>
          </span>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
// import { ref } from "vue";

export default {
  emits: ["sort", "clean-sorted"],
  name: "TheTransactionTableHeader",
  props: {
    isSortedAmount: {
      type: Boolean,
      required: true,
    },
    // isSortedDate: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  setup(_, { emit }) {
    // let sortedAmount = ref(false);
    const cleanSorted = (e) => {
      if (e === "amount") {
        emit("clean-sorted", "amount");
        // sortedAmount.value = false;
      }
    };

    return {
      // sortedAmount,
      cleanSorted,
    };
  },
};
</script>
