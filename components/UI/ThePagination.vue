<template>
  <nav class="my-4 pb-4 text-center">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <button
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="previousPage"
        >
          <p class="w-13 font-bold">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </p>
        </button>
      </li>
      <li v-if="actual > 2">
        <button
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="goToPage(actual - 2)"
        >
          <p class="w-13 font-bold">
            {{ actual - 2 }}
          </p>
        </button>
      </li>
      <li v-if="actual > 1">
        <button
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="goToPage(actual - 1)"
        >
          <p class="w-13 font-bold">
            {{ actual - 1 }}
          </p>
        </button>
      </li>
      <li>
        <p
          class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        >
          {{ actual }}
        </p>
      </li>
      <li>
        <button
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="goToPage(actual + 1)"
        >
          <p class="w-13 font-bold">
            {{ actual + 1 }}
          </p>
        </button>
      </li>
      <li>
        <button
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="goToPage(actual + 2)"
        >
          <p class="w-13 font-bold">
            {{ actual + 2 }}
          </p>
        </button>
      </li>
      <li>
        <button
          class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="nextPage"
        >
          <p class="w-13 font-bold">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </p>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  emits: ["previousPage", "nextPage"],
  props: {
    actual: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  setup(_, { emit }) {
    const previousPage = () => {
      emit("previousPage");
    };

    const nextPage = () => {
      emit("nextPage");
    };

    const goToPage = (e) => {
      emit("goToPage", e);
    };

    return {
      previousPage,
      nextPage,
      goToPage,
    };
  },
};
</script>
