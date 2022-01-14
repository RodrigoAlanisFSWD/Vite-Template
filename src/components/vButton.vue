<script setup>
defineProps({
  text: String,
  color: String,
});
</script>

<template>
  <button
    :class="`
      bg-${color}
      p-3
      border-2 border-${color}
      text-white
      rounded-sm
      hover:bg-white hover:text-${color}
      transition-all
      duration-300
      w-full
    `"
  >
    {{ text }}
  </button>
</template>

