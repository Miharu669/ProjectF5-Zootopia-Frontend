<script setup>
import { ref } from "vue";
import { useAnimalStore } from '../stores/animalStore.js';

const props = defineProps({
  animal: Object,
});

const openDelete = ref(false);
const animalStore = useAnimalStore();

const deleteAnimal = async () => {
  await animalStore.deleteAnimal(props.animal.id);
  openDelete.value = false;
};

</script>

<template>
  <div>
    <button
      class="px-2 py-3 mt-3 font-medium tracking-wide text-white focus:outline-none"
      @click="openDelete = true"
    >
      <div class="bg-random-100 rounded-full p-3 inline-block">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_69_4)">
            <path
              d="M13.5938 0.937505H10.0781L9.80273 0.389654C9.7444 0.272529 9.65454 0.174006 9.54326 0.105169C9.43198 0.0363316 9.3037 -8.87099e-05 9.17285 5.13654e-06H5.82422C5.69367 -0.000496735 5.56561 0.0357878 5.45473 0.104702C5.34384 0.173615 5.25462 0.272371 5.19727 0.389654L4.92188 0.937505H1.40625C1.28193 0.937505 1.1627 0.986891 1.07479 1.0748C0.986886 1.16271 0.9375 1.28193 0.9375 1.40626L0.9375 2.34376C0.9375 2.46808 0.986886 2.5873 1.07479 2.67521C1.1627 2.76312 1.28193 2.81251 1.40625 2.81251H13.5938C13.7181 2.81251 13.8373 2.76312 13.9252 2.67521C14.0131 2.5873 14.0625 2.46808 14.0625 2.34376V1.40626C14.0625 1.28193 14.0131 1.16271 13.9252 1.0748C13.8373 0.986891 13.7181 0.937505 13.5938 0.937505ZM2.49609 13.6816C2.51845 14.0387 2.67602 14.3737 2.93674 14.6187C3.19745 14.8636 3.5417 15 3.89941 15H11.1006C11.4583 15 11.8026 14.8636 12.0633 14.6187C12.324 14.3737 12.4815 14.0387 12.5039 13.6816L13.125 3.75001H1.875L2.49609 13.6816Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_69_4">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </button>

    <div
      :class="`modal ${
        !openDelete && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="openDelete = false"
      />

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded-3xl shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        
        <div class="px-6 py-4 text-left modal-content">
          <!-- Title -->
          <div class="flex items-center justify-between pb-3">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_72_601)">
                <rect width="50" height="50" rx="12"  />
                <path
                  d="M24.8063 6.3C24.8676 6.26642 24.9364 6.24919 25.0063 6.25C25.0751 6.24973 25.1428 6.26693 25.2032 6.3C25.2742 6.34334 25.3325 6.40482 25.3719 6.47813L46.8 42.9375C46.9125 43.125 46.9094 43.325 46.8063 43.5094C46.7634 43.5827 46.706 43.6465 46.6375 43.6969C46.5771 43.7382 46.5041 43.757 46.4313 43.75H3.58129C3.50844 43.757 3.43545 43.7382 3.37504 43.6969C3.30664 43.6465 3.24922 43.5827 3.20629 43.5094C3.15611 43.4222 3.13022 43.3232 3.13132 43.2226C3.13242 43.122 3.16047 43.0236 3.21254 42.9375L24.6375 6.47813C24.677 6.40482 24.7352 6.34334 24.8063 6.3ZM28.0688 4.89375C27.7595 4.35489 27.3134 3.90719 26.7757 3.59585C26.238 3.28452 25.6276 3.12057 25.0063 3.12057C24.385 3.12057 23.7746 3.28452 23.2369 3.59585C22.6992 3.90719 22.2531 4.35489 21.9438 4.89375L0.51567 41.3531C-0.912455 43.7844 0.800044 46.875 3.57817 46.875H46.4313C49.2094 46.875 50.925 43.7813 49.4938 41.3531L28.0688 4.89375Z"
                  fill="#FF0000"
                />
                <path
                  d="M21.8813 37.5C21.8813 37.0896 21.9622 36.6833 22.1192 36.3041C22.2763 35.925 22.5065 35.5805 22.7966 35.2903C23.0868 35.0001 23.4313 34.7699 23.8105 34.6129C24.1896 34.4558 24.596 34.375 25.0063 34.375C25.4167 34.375 25.8231 34.4558 26.2022 34.6129C26.5814 34.7699 26.9259 35.0001 27.2161 35.2903C27.5062 35.5805 27.7364 35.925 27.8935 36.3041C28.0505 36.6833 28.1313 37.0896 28.1313 37.5C28.1313 38.3288 27.8021 39.1237 27.2161 39.7097C26.63 40.2958 25.8351 40.625 25.0063 40.625C24.1775 40.625 23.3827 40.2958 22.7966 39.7097C22.2106 39.1237 21.8813 38.3288 21.8813 37.5ZM22.1876 18.7344C22.146 18.3401 22.1877 17.9415 22.3101 17.5645C22.4325 17.1874 22.6328 16.8403 22.898 16.5456C23.1632 16.2509 23.4874 16.0153 23.8495 15.854C24.2117 15.6927 24.6037 15.6094 25.0001 15.6094C25.3965 15.6094 25.7885 15.6927 26.1507 15.854C26.5128 16.0153 26.837 16.2509 27.1022 16.5456C27.3674 16.8403 27.5677 17.1874 27.6901 17.5645C27.8125 17.9415 27.8542 18.3401 27.8126 18.7344L26.7188 29.6938C26.6821 30.1243 26.4851 30.5254 26.1668 30.8176C25.8486 31.1099 25.4322 31.272 25.0001 31.272C24.568 31.272 24.1516 31.1099 23.8334 30.8176C23.5151 30.5254 23.3181 30.1243 23.2813 29.6938L22.1876 18.7344Z"
                  fill="#FF0000"
                />
              </g>
              <defs>
                <clipPath id="clip0_72_601">
                  <rect width="50" height="50" rx="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="text-2xl text-center font-bold">Delete item</p>
            <div
              class="z-50 cursor-pointer modal-close"
              @click="openDelete = false"
            >
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!-- Body -->
          <p>Are you sure you want to delete this item?</p>
          <p>This action cannot be undone.</p>

          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <div class="flex justify-end mt-4 space-x-4">
              <button
                class="px-4 py-2 text-random-50 bg-transparent border-2 border-random-50 rounded-full hover:bg-random-50 hover:outline-random-50 hover:text-white"
                @click="openDelete = false"
              >
                Cancel
              </button>
              <button
                class="px-4 py-2 text-white bg-random-50 border-2 border-random-50 rounded-full hover:bg-transparent hover:outline-random-50 hover:text-random-50"
                @click="deleteAnimal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
