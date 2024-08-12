<script setup>
import { ref } from 'vue'
import { useSidebar } from '../composables/useSidebar'
import { useRoute } from 'vue-router'

const { isOpen } = useSidebar()
const route = useRoute()
const activeClass = ref(
  'bg-random-100 fill-current text-random-50 rounded-l-full',
)
const inactiveClass = ref(
  'text-white hover:bg-random-100 hover:text-random-50 hover:rounded-l-full group',
)
</script>

<template>
  <div class="flex">
    <div :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" @click="isOpen = false" />

    <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-marron-800 lg:translate-x-0 lg:static lg:inset-0">
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <h2 class="text-5xl font-caesar bg-ocre-950 text-ocre-50">
            ZOOTOPIA
          </h2>
        </div>
      </div>

      <nav class="mt-10">
        <router-link class="flex items-center px-6 py-4 mt-4 duration-200 border-l-4"
          :class="route.name === 'Dashboard' ? activeClass : inactiveClass" to="/dashboard">
          <svg :class="route.name === 'Dashboard' ? 'text-random-50' : 'text-white group-hover:text-random-50'" class="w-5 h-5 fill-current"
            viewBox="0 0 30 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.3333 10.3333L18.3333 1.56667C17.4166 0.746745 16.2299 0.293449 15 0.293449C13.7701 0.293449 12.5834 0.746745 11.6666 1.56667L1.66665 10.3333C1.13726 10.8068 0.714816 11.3876 0.427436 12.0371C0.140055 12.6866 -0.00566307 13.3898 -1.74859e-05 14.1V28.6667C-1.74859e-05 29.9928 0.526767 31.2645 1.46445 32.2022C2.40213 33.1399 3.6739 33.6667 4.99998 33.6667H25C26.3261 33.6667 27.5978 33.1399 28.5355 32.2022C29.4732 31.2645 30 29.9928 30 28.6667V14.0833C30.0033 13.3759 29.8564 12.6759 29.5691 12.0295C29.2818 11.383 28.8606 10.8049 28.3333 10.3333ZM18.3333 30.3333H11.6666V22C11.6666 21.558 11.8422 21.1341 12.1548 20.8215C12.4674 20.5089 12.8913 20.3333 13.3333 20.3333H16.6666C17.1087 20.3333 17.5326 20.5089 17.8452 20.8215C18.1577 21.1341 18.3333 21.558 18.3333 22V30.3333ZM26.6666 28.6667C26.6666 29.1087 26.4911 29.5326 26.1785 29.8452C25.8659 30.1577 25.442 30.3333 25 30.3333H21.6666V22C21.6666 20.6739 21.1399 19.4021 20.2022 18.4645C19.2645 17.5268 17.9927 17 16.6666 17H13.3333C12.0072 17 10.7355 17.5268 9.79778 18.4645C8.8601 19.4021 8.33331 20.6739 8.33331 22V30.3333H4.99998C4.55795 30.3333 4.13403 30.1577 3.82147 29.8452C3.50891 29.5326 3.33332 29.1087 3.33332 28.6667V14.0833C3.33362 13.8467 3.3843 13.6128 3.48201 13.3973C3.57972 13.1818 3.7222 12.9895 3.89998 12.8333L13.9 4.08334C14.2041 3.81614 14.5951 3.66878 15 3.66878C15.4048 3.66878 15.7958 3.81614 16.1 4.08334L26.1 12.8333C26.2778 12.9895 26.4202 13.1818 26.518 13.3973C26.6157 13.6128 26.6663 13.8467 26.6666 14.0833V28.6667Z"
              fill="currentColor" />
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link class="flex items-center px-6 py-4 mt-4 duration-200 border-l-4"
          :class="route.name === 'Forms' ? activeClass : inactiveClass" to="/forms">
          <svg :class="route.name === 'Forms' ? 'text-random-50' : 'text-white group-hover:text-random-50'" class="w-5 h-5 fill-current"
            viewBox="0 0 20 20" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7.34783 12.5764H0V7.33624H7.34783V0H12.5652V7.33624H20V12.5764H12.5652V20H7.34783V12.5764Z"
              fill="currentColor" />
          </svg>

          <span class="mx-4">Add new</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>
