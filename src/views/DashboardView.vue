<script setup>
import { ref } from 'vue'
import Pagination from '../components/Pagination.vue';

const testUser = {
  name: 'John Doe',
  email: 'john@example.com',
  title: 'Software Engineer',
  title2: 'Web dev',
  status: 'Active',
  role: 'Owner',
  date: 'Ayer',
}

const users = ref([...Array(10).keys()].map(() => testUser))
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
            <div class="mx-5">
              <h4 class="font-semibold text-gray-800">
                Total species
              </h4>
            </div>
            <div class="mx-5  text-right">
              <p class="font-semibold text-random-50">
                504
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
              <tr v-for="(u, index) in users" :key="index">
                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="">
                    </div>

                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-gray-900">
                        {{ u.name }}
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        {{ u.email }}
                      </div>
                    </div>
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div class="text-sm leading-5 text-gray-900">
                    {{ u.title }}
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    {{ u.title2 }}
                  </div>
                </td>

                <td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <span
                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{{
                      u.status }}</span>
                </td>

                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                  {{ u.role }}
                </td>

                <td class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                  {{ u.date }}
                </td>

                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    <div class="bg-random-100 rounded-full p-3 inline-block">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.51787 2.73147L12.2684 6.48211L4.12433 14.6265L0.780474 14.9956C0.332829 15.0451 -0.0453838 14.6666 0.00441962 14.219L0.37648 10.8726L8.51787 2.73147ZM14.588 2.17306L12.827 0.411994C12.2777 -0.137331 11.3868 -0.137331 10.8375 0.411994L9.18084 2.06876L12.9313 5.81941L14.588 4.16264C15.1373 3.61302 15.1373 2.72238 14.588 2.17306Z"
                          fill="black" />
                      </svg>
                    </div>
                  </a>
                </td>
                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    <div class="bg-random-100 rounded-full p-3 inline-block">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_69_4)">
                          <path
                            d="M13.5938 0.937505H10.0781L9.80273 0.389654C9.7444 0.272529 9.65454 0.174006 9.54326 0.105169C9.43198 0.0363316 9.3037 -8.87099e-05 9.17285 5.13654e-06H5.82422C5.69367 -0.000496735 5.56561 0.0357878 5.45473 0.104702C5.34384 0.173615 5.25462 0.272371 5.19727 0.389654L4.92188 0.937505H1.40625C1.28193 0.937505 1.1627 0.986891 1.07479 1.0748C0.986886 1.16271 0.9375 1.28193 0.9375 1.40626L0.9375 2.34376C0.9375 2.46808 0.986886 2.5873 1.07479 2.67521C1.1627 2.76312 1.28193 2.81251 1.40625 2.81251H13.5938C13.7181 2.81251 13.8373 2.76312 13.9252 2.67521C14.0131 2.5873 14.0625 2.46808 14.0625 2.34376V1.40626C14.0625 1.28193 14.0131 1.16271 13.9252 1.0748C13.8373 0.986891 13.7181 0.937505 13.5938 0.937505ZM2.49609 13.6816C2.51845 14.0387 2.67602 14.3737 2.93674 14.6187C3.19745 14.8636 3.5417 15 3.89941 15H11.1006C11.4583 15 11.8026 14.8636 12.0633 14.6187C12.324 14.3737 12.4815 14.0387 12.5039 13.6816L13.125 3.75001H1.875L2.49609 13.6816Z"
                            fill="black" />
                        </g>
                        <defs>
                          <clipPath id="clip0_69_4">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
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
