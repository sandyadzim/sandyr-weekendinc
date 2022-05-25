<template>
  <swiper
    :modules="modules"
    :slides-per-view="'auto'"
    :space-between="10"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    class="md:ml-16 md:mr-16 swiper-testimony"
  >
    <swiper-slide v-for="item in items" :key="item.id" class="slide-testimony">
      <div class="text-left p-5">
        <h3 class="text-3xl font-black mb-5">{{ item.by }}</h3>
        <p class="text-testimony" :title="item.testimony">
          {{ item.testimony }}
        </p>
      </div>
    </swiper-slide>

    <!-- Navigation -->
    <div class="swiper-button-prev hidden md:block"></div>
    <div class="swiper-button-next hidden md:block"></div>
  </swiper>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { ITestimonial } from '../interfaces/ITestimonial'
// Import Component
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'

// Declare Swiper Additional
const modules = [Navigation]

// Declare Props
const props = defineProps({
  items: {
    type: Array as PropType<ITestimonial[]>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

.swiper-button-prev {
  background-image: url('../assets/img/chevron-right.svg');
  background-repeat: no-repeat;
  width: 32px;
  left: 0px;
  transform: rotate(180deg);
}

.swiper-button-next {
  background-image: url('../assets/img/chevron-right.svg');
  width: 32px;
  right: 0;
  background-repeat: no-repeat;
}

.swiper-testimony {
  position: unset;

  .slide-testimony {
    @apply bg-white w-[247px] h-40 text-black;

    .text-testimony {
      font-size: 12px;
      display: -webkit-box !important;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
