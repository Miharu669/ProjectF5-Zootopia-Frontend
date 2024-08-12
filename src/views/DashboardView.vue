<script setup>
import { ref, onMounted } from 'vue'
import Pagination from '../components/Pagination.vue';
import DeleteModal from '../components/DeleteModal.vue';
import ModifyModal from '../components/ModifyModal.vue';
import { useAnimalStore } from '../stores/animalStore.js'

// const testUser = {
//   name: 'John Doe',
//   title: 'Software Engineer',
//   title2: 'Web dev',
//   family: 'monoparental',
//   gender: 'Non Binary',
//   date: 'Ayer',
// }

// const users = ref([...Array(10).keys()].map(() => testUser))

const animalStore = useAnimalStore();

onMounted(() => {
  animalStore.fetchAnimals(); 
});

</script>

<template>
  <div>
    <h3 class="text-3xl font-semibold text-marron-800">
      List of species
    </h3>

    <div class="mt-4">
      <div class="flex flex-wrap -mx-6">
        <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div class="flex justify-between px-5 py-6 bg-white rounded-3xl shadow-sm">
            <div class="mx-1">
              <h4 class="font-semibold text-gray-800">
                Total species
              </h4>
            </div>
            <div class="mx-5  text-right">
              <p class="font-semibold text-random-50">
                {{ animalStore.animals.length }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8" />

    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-3xl">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Name
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Type
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Family
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Gender
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Date
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50" />

              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(animal, index) in animalStore.animals" :key="index">
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="">
                    </div>

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ animal.name }}
                      </div>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ animal.type.name }}
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ animal.type.family.name }}
                  </div>
                </td>

                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                  {{ animal.gender }}
                </td>

                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                  {{ animal.dateOfEntry }}
                </td>

                <td
                  class="px-2 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                  <ModifyModal :animal="animal"/>
                </td>
                <td
                  class="px-2 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">

                  <DeleteModal :animal="animal" />
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>
