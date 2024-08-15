<script setup>
import { ref, onMounted } from 'vue';
import { useAnimalStore } from '../stores/animalStore.js';

const animalStore = useAnimalStore();
const families = ref([]);
const selectedFilters = ref([]);


const applyFilters = () => {
  animalStore.applyFilters(selectedFilters.value);
};


const resetFilters = () => {
  selectedFilters.value = [];
  applyFilters();  
};

onMounted(async () => {
  await animalStore.fetchFamilies();
  families.value = animalStore.families;  
});
</script>

<template>
  <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3">
    <div class="px-5 py-6 bg-white rounded-3xl shadow-sm border border-random-50">
      <details class="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
        <summary class="flex cursor-pointer items-center justify-between gap-2 text-gray-900 transition">
          <span class="text-sm font-semibold text-random-50"> Filter </span>

          <span class="transition group-open:-rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <span class="text-sm text-gray-500">{{ selectedFilters.length }} Selected</span>

            <button @click="resetFilters" type="button" class="text-sm text-gray-600 underline underline-offset-4">
              Reset
            </button>
          </header>

          <ul class="space-y-1 border-t border-gray-200 p-4">
            <li v-for="family in families" :key="family.id">
              <label :for="family.name" class="inline-flex items-center gap-2">
                <input type="checkbox" :id="family.name" :value="family.name" class="size-5 rounded accent-marron-800" v-model="selectedFilters" />
                <span class="text-sm font-medium text-gray-500">{{ family.name }}</span>
              </label>
            </li>
          </ul>

          <div class="p-4">
            <button @click="applyFilters" type="button" class="w-full text-center bg-random-50 text-white py-2 rounded-lg">
              Apply
            </button>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>
