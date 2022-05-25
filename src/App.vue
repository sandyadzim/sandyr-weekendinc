<template>
  <div>
    <Header class="relative bg-white z-10" />

    <div class="relative bg-pink-weekend">
      <div class="relative mb-16 md:mb-36">
        <HeroImage />

        <div class="relative text-center text-white z-10 pt-20">
          <h1 class="text-[52px] md:text-6xl font-bold mb-5">
            WEEKEND FROM HOME
          </h1>
          <h5 class="md:text-xl font-medium italic">
            Stay active with a little workout.
          </h5>
        </div>

        <div class="relative flex justify-center mt-16">
          <img :src="AstroHero" alt="main-astro" width="184" height="305" />
          <div class="absolute top-1/2">
            <button class="btn-white">Let’s Go</button>
          </div>
        </div>
      </div>

      <div class="flex-section items-center">
        <div
          class="md:w-1/3 px-8 pt-16 pb-8 md:px-0 md:pt-0 md:pb-0 mb-48 mt-40"
        >
          <p class="text-right font-medium text-xl">
            <span class="text-blue-weekend font-bold">Deffinition;</span> a
            practice or exercise to test or improve one's fitness for athletic
            competition, ability, or performance to exhaust (something, such as
            a mine) by working to devise, arrange, or achieve by resolving
            difficulties. Merriam-Webster.com Dictionary.
          </p>
          <h5 class="text-right text-white italic text-xl mt-7">
            -weekend team
          </h5>
        </div>

        <img
          :src="AstroRight"
          alt="astro-right"
          class="absolute top-0 right-0"
        />
        <img
          :src="BlueCircle"
          alt="circle-blue"
          class="absolute bottom-16 left-8 md:left-1/4"
        />
      </div>
    </div>

    <div class="bg-black text-white">
      <div
        class="flex-section center-desktop p-8 md:p-0 -mt-32 md:-mt-28 md:mb-24 mb-16"
      >
        <h2 class="text-3xl font-black mb-8 shadow-text">Testimonial</h2>

        <div class="relative md:w-2/5 w-full">
          <Testimonial :items="state.itemsTestimonial" />
        </div>
      </div>

      <div class="flex-section center-desktop p-8 md:p-0 md:pb-16">
        <SectionInfo title-section="POV" :content="povContent" />
      </div>

      <div class="flex-section center-desktop p-8 md:p-0 md:pb-16">
        <SectionInfo title-section="Resource" :content="resourceContent" />
      </div>

      <HelpTips :items="state.itemsHelp" />

      <div class="flex-section center-desktop p-8 md:p-0 md:pb-[203px]">
        <SectionInfo title-section="You’re all set." :content="setContent" />

        <img
          :src="AstroBottom"
          alt="astro-bottom"
          class="md:absolute md:bottom-0 md:left-0 mt-16 md:mt-0 -mb-8 md:mb-0 -ml-8 md:ml-0"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

// Import Store
import { useHelpStore } from './store/help'
import { useTestimonialStore } from './store/testimonial'

// Import Component
import {
  Header,
  HeroImage,
  Footer,
  HelpTips,
  Testimonial,
  SectionInfo,
} from './components/index'

// Import Interface
import { IHelp } from './interfaces/IHelp'
import { ITestimonial } from './interfaces/ITestimonial'

// Import Image
import {
  AstroHero,
  AstroBottom,
  AstroRight,
  BlueCircle,
} from './assets/img/index'

interface StateAll {
  itemsHelp: IHelp[]
  itemsTestimonial: ITestimonial[]
}

// Declare Store
const helpStore = useHelpStore()
const testimonialStore = useTestimonialStore()

// Variable Reactive
const state = reactive<StateAll>({
  itemsHelp: [],
  itemsTestimonial: [],
})

// Variable Ref
const povContent = ref<string>(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
)
const resourceContent = ref<string>(
  'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.'
)
const setContent = ref<string>(
  'The wise man therefore always holds in these matters to this principle of selection.'
)

const getHelp = async () => {
  const response: any = await helpStore.fetchHelp()
  state.itemsHelp = response.data
}

const getTestimonial = async () => {
  const response: any = await testimonialStore.fetchTestimonial()
  state.itemsTestimonial = response.data
}

onMounted(() => {
  getHelp()
  getTestimonial()
})
</script>
