<template>
  <!-- Desktop -->
  <img
    :src="HeroBlack"
    alt="hero-black"
    class="absolute -top-20 left-0 w-full hidden md:block"
  />
  <img
    :src="HeroBlue"
    alt="hero-blue"
    class="absolute -top-14 left-52 hidden md:block"
  />
  <!-- Mobile -->
  <img
    :src="HeroBlackM"
    alt="hero-black-m"
    class="absolute top-0 left-0 w-full block md:hidden"
  />
  <img
    :src="HeroBlueM"
    alt="hero-blue-m"
    class="absolute -top-10 -left-10 block md:hidden"
  />

  <img
    :src="BlueCircle"
    alt="blue-circle"
    width="132"
    class="absolute top-[35%] md:top-1/3 md:left-1/3 -left-16"
  />
  <img
    :src="HeroPink"
    alt="hero-pink"
    class="absolute top-1/3 right-[15%] hidden md:block"
  />
</template>

<script lang="ts" setup>
// Import Image
import {
  BlueCircle,
  HeroBlack,
  HeroBlue,
  HeroBlackM,
  HeroBlueM,
  HeroPink,
} from '../assets/img/index'
</script>
