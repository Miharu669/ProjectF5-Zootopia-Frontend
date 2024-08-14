<template>
  <div>
    <h3 class="text-3xl font-semibold text-marron-800">List of species</h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3">
          <div
            class="flex justify-between px-5 py-6 bg-white rounded-3xl shadow-sm"
          >
            <div class="mx-1">
              <h4 class="font-semibold text-gray-800">Total species</h4>
            </div>
            <div class="mx-5 text-right">
              <p class="font-semibold text-random-50">
                {{ animalStore.animals.length }}
              </p>
            </div>
          </div>
        </div>
        <Filter />
        <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3">
          <div class="px-5 py-6 bg-random-50 rounded-3xl shadow-sm">
            <Router-link
              class="text-white font-semibold flex justify-center gap-5"
              to="/forms"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.34783 12.5764H0V7.33624H7.34783V0H12.5652V7.33624H20V12.5764H12.5652V20H7.34783V12.5764Z"
                  fill="white"
                />
              </svg>
              Add new
            </Router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8" />

    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-3xl"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Type
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Family
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Gender
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                >
                  Date
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="(animal, index) in animalsToShow" :key="index">
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ animal.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-sm leading-5 text-gray-900">
                    {{ animal.type.name }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                >
                  <div class="text-sm leading-5 text-gray-900">
                    {{ animal.type.family.name }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ animal.gender }}
                </td>
                <td
                  class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                >
                  {{ animal.dateOfEntry }}
                </td>
                <td
                  class="px-2 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <button
                    class="py-3 mt-3 font-medium tracking-wide text-white focus:outline-none"
                    @click="openEditModal(animal)"
                  >
                    <!-- Icono de lápiz -->
                    <div class="bg-random-100 rounded-full p-3 inline-block">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.51787 2.73147L12.2684 6.48211L4.12433 14.6265L0.780474 14.9956C0.332829 15.0451 -0.0453838 14.6666 0.00441962 14.219L0.37648 10.8726L8.51787 2.73147ZM14.588 2.17306L12.827 0.411994C12.2777 -0.137331 11.3868 -0.137331 10.8375 0.411994L9.18084 2.06876L12.9313 5.81941L14.588 4.16264C15.1373 3.61302 15.1373 2.72238 14.588 2.17306Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </button>
                </td>
                <td
                  class="px-2 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <DeleteModal :animal="animal" />
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination
            :currentPage="currentPage"
            :totalPages="totalPages"
            @page-changed="handlePageChange"
          />
        </div>
      </div>
    </div>

    <ModifyModal
      v-if="showModal"
      :isVisible="showModal"
      :animal="selectedAnimal"
      @update:animal="handleAnimalUpdate"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Pagination from "../components/Pagination.vue";
import DeleteModal from "../components/DeleteModal.vue";
import ModifyModal from "../components/ModifyModal.vue";
import Filter from "../components/Filter.vue";
import { useAnimalStore } from "../stores/animalStore.js";

const animalStore = useAnimalStore();
const selectedAnimal = ref(null);
const showModal = ref(false);
const currentPage = ref(1);
const itemsPerPage = 10;

const openEditModal = (animal) => {
  selectedAnimal.value = animal;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedAnimal.value = null;
};

const handleAnimalUpdate = () => {
  animalStore.fetchAnimals();
};

const totalPages = computed(() =>
  Math.ceil(animalStore.filteredAnimals.length / itemsPerPage)
);

const animalsToShow = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return animalStore.filteredAnimals.slice(start, end);
});

function handlePageChange(page) {
  currentPage.value = page;
}

onMounted(() => {
  animalStore.fetchAnimals().then(() => {
    if (animalStore.selectedFilters.length > 0) {
      animalStore.applyFilters(animalStore.selectedFilters);
    }
  });
});
</script>
