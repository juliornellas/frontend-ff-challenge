<template>
  <button
    @click="$emit('clicked')"
    class="border rounded shadow-md hover:shadow-lg"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheButton",
};
</script>
