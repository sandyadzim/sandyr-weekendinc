<template>
  <h2 class="text-3xl font-black mb-8">{{ titleSection }}</h2>
  <div class="md:w-1/3">
    <p class="text-lg md:text-center text-left">
      {{ content }}
    </p>
  </div>
</template>

<script lang="ts" setup>
// Declare Props
const props = defineProps({
  titleSection: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>
