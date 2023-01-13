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
          @click="$emit('sort')"
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
          class="pl-2 py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20"
        >
          Amount
        </div>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  emits: ["sort"],
  name: "TheTransactionTableHeader",
};
</script>
