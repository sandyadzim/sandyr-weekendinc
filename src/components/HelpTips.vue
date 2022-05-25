<template>
  <div
    class="flex-section center-desktop text-left p-8 md:p-0 md:mt-16 mt-9 md:mb-32 mb-16"
  >
    <img
      :src="HelpPink"
      alt="help-pink"
      class="absolute top-0 right-96 md:block hidden"
    />
    <h2 class="text-3xl font-black mb-8">Help & Tips</h2>

    <div class="relative flex flex-wrap gap-3 justify-center">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex items-end text-left w-[311px] h-44 bg-cover bg-no-repeat bg-center"
        :style="`background-image: url(${item.image})`"
      >
        <div class="between-center py-4 px-6 space-x-4 bg-black/50 h-[72px]">
          <h4>{{ item.title }}</h4>
          <img :src="ChevronRight" alt="chevron-right" class="cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IHelp } from '../interfaces/IHelp'
import { HelpPink, ChevronRight } from '../assets/img/index'
// Declare Props
const props = defineProps({
  items: {
    type: Array as PropType<IHelp[]>,
    required: true,
  },
})
</script>
