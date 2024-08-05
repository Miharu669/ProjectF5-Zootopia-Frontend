<script setup>
import { ref } from 'vue'
import { useSidebar } from '../composables/useSidebar'

const { isOpen } = useSidebar()
const activeClass = ref(
  'bg-random-100 text-random-50 rounded-l-full',
)
const inactiveClass = ref(
  'text-white hover:bg-random-100 hover:text-random-50 hover:rounded-l-full',
)
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" @click="isOpen = false" />
    <!-- End Backdrop -->

    <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-marron-800 lg:translate-x-0 lg:static lg:inset-0">
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <!-- <svg
            class="w-12 h-12"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
              fill="#4C51BF"
              stroke="#4C51BF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
              fill="white"
            />
          </svg> -->

          <h2 class="text-5xl font-caesar bg-ocre-950  text-ocre-50">
            ZOOTOPIA
          </h2>
        </div>
      </div>

      <nav class="mt-10">
        <router-link class="flex items-center px-6 py-4 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]" to="/dashboard">
          <svg class="w-5 h-5" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.3333 10.3333L18.3333 1.56667C17.4166 0.746745 16.2299 0.293449 15 0.293449C13.7701 0.293449 12.5834 0.746745 11.6666 1.56667L1.66665 10.3333C1.13726 10.8068 0.714816 11.3876 0.427436 12.0371C0.140055 12.6866 -0.00566307 13.3898 -1.74859e-05 14.1V28.6667C-1.74859e-05 29.9928 0.526767 31.2645 1.46445 32.2022C2.40213 33.1399 3.6739 33.6667 4.99998 33.6667H25C26.3261 33.6667 27.5978 33.1399 28.5355 32.2022C29.4732 31.2645 30 29.9928 30 28.6667V14.0833C30.0033 13.3759 29.8564 12.6759 29.5691 12.0295C29.2818 11.383 28.8606 10.8049 28.3333 10.3333ZM18.3333 30.3333H11.6666V22C11.6666 21.558 11.8422 21.1341 12.1548 20.8215C12.4674 20.5089 12.8913 20.3333 13.3333 20.3333H16.6666C17.1087 20.3333 17.5326 20.5089 17.8452 20.8215C18.1577 21.1341 18.3333 21.558 18.3333 22V30.3333ZM26.6666 28.6667C26.6666 29.1087 26.4911 29.5326 26.1785 29.8452C25.8659 30.1577 25.442 30.3333 25 30.3333H21.6666V22C21.6666 20.6739 21.1399 19.4021 20.2022 18.4645C19.2645 17.5268 17.9927 17 16.6666 17H13.3333C12.0072 17 10.7355 17.5268 9.79778 18.4645C8.8601 19.4021 8.33331 20.6739 8.33331 22V30.3333H4.99998C4.55795 30.3333 4.13403 30.1577 3.82147 29.8452C3.50891 29.5326 3.33332 29.1087 3.33332 28.6667V14.0833C3.33362 13.8467 3.3843 13.6128 3.48201 13.3973C3.57972 13.1818 3.7222 12.9895 3.89998 12.8333L13.9 4.08334C14.2041 3.81614 14.5951 3.66878 15 3.66878C15.4048 3.66878 15.7958 3.81614 16.1 4.08334L26.1 12.8333C26.2778 12.9895 26.4202 13.1818 26.518 13.3973C26.6157 13.6128 26.6663 13.8467 26.6666 14.0833V28.6667Z"
              fill="white" />
          </svg>

          <span class="mx-4">Dashboard</span>
        </router-link>

        <!-- <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'UIElements' ? activeClass : inactiveClass]" to="/ui-elements">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
              fill="currentColor" />
            <path
              d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
              fill="currentColor" />
            <path
              d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
              fill="currentColor" />
            <path
              d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
              fill="currentColor" />
          </svg>

          <span class="mx-4">UI Elements</span>
        </router-link> -->

        <!-- <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Tables' ? activeClass : inactiveClass]" to="/tables">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z"
              fill="currentColor" />
            <path
              d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z"
              fill="currentColor" />
            <path
              d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z"
              fill="currentColor" />
          </svg>

          <span class="mx-4">Tables</span>
        </router-link> -->

        <router-link class="flex items-center px-6 py-4 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Forms' ? activeClass : inactiveClass]" to="/forms">
          <svg class="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.34783 12.5764H0V7.33624H7.34783V0H12.5652V7.33624H20V12.5764H12.5652V20H7.34783V12.5764Z"
              fill="white" />
          </svg>

          <span class="mx-4">Forms</span>
        </router-link>

        <!-- <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Cards' ? activeClass : inactiveClass]" to="/cards">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fill-rule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clip-rule="evenodd" />
          </svg>

          <span class="mx-4">Cards</span>
        </router-link> -->

        <!-- <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Modal' ? activeClass : inactiveClass]" to="/modal">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>

          <span class="mx-4">Modal</span>
        </router-link> -->

        <!-- <router-link class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Blank' ? activeClass : inactiveClass]" to="/blank">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>

          <span class="mx-4">Blank</span>
        </router-link> -->
      </nav>
    </div>
  </div>
</template>
