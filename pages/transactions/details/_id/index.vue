<template>
  <div class="py-4">
    <div class="flex items-center justify-center mb-4 font-bold">
      Transaction Details
    </div>
    <div class="border rounded mx-4 p-2 shadow-sm">
      <div class="mt-2">
        <h3 class="block font-bold text-gray-600">Account</h3>
        <p class="mt-2">Account name</p>
      </div>
      <div class="mt-2">
        <h3 class="block font-bold text-gray-600">Reference</h3>
        <p class="mt-2">Text to reference</p>
      </div>
      <div class="mt-2">
        <h3 class="block font-bold text-gray-600">Amount</h3>
        <p class="mt-2">3.21 EUR</p>
      </div>
      <div class="mt-2">
        <h3 class="block font-bold text-gray-600">Date</h3>
        <p class="mt-2">17/04/2022</p>
      </div>
      <div class="mt-2">
        <h3 class="block">
          <span class="font-bold text-gray-600"> Category </span>
          <TheButton
            class="ml-2 text-xs text-gray-500 px-2 py-1 hover:bg-blue-100"
            @clicked="showOrHide"
          >
            <template>
              {{ show ? "Close New category" : "+ New category" }}
            </template>
          </TheButton>
        </h3>
        <div>
          <TheSelectOption class="mt-2 shadow-md"></TheSelectOption>
        </div>
        <div class="grid grid-flow-col auto-cols-auto">
          <TheInput
            placeholder="Tap here to create a new category"
            class="w-full border border rounded px-2 py-1 shadow-md"
          />
          <TheButton class="hover:bg-green-200">
            <template> Create </template>
          </TheButton>
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
import TheSelectOption from "~/components/UI/TheSelectOption.vue";
import TheButton from "~/components/UI/TheButton.vue";
import TheInput from "~/components/UI/TheInput.vue";

export default {
  components: {
    TheSelectOption,
    TheButton,
    TheInput,
  },
  setup() {
    let show = false;

    const showOrHide = () => {
      show = !show;
      console.log("Show or hide", show);
    };
    return {
      show,
      showOrHide,
    };
  },
};
</script>
