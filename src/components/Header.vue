<template>
  <header class="h-[67px]">
    <div class="h-full flex items-center py-4 md:px-52 px-6 mx-auto">
      <img :src="Logo" alt="logo-bitmap" width="33" height="33" />
      <div class="ml-3">
        <p class="text-xs">Good Morning</p>
        <span class="font-bold">Fellas</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Logo from '../assets/img/Bitmap.png'
</script>
