<script setup>
import { ref } from "vue";

const user = ref({
  username: "",
  email: "",
  password: "",
  confirm: "",
});

function register() {
  const data = JSON.parse(JSON.stringify(user.value));
  // eslint-disable-next-line no-console
  console.log("Registered: ", data);
}
</script>

<template>
  <div class="mt-8 ">
    <h3 class="text-3xl font-semibold text-marron-800 text-center">
      Add a new animal
    </h3>

    <div class="mt-12 pb-5">
      <div class="bg-white rounded-3xl shadow-md">
        <div class="bg-random-50 p-4 rounded-t-3xl">
          <h2 class="text-lg font-semibold text-white capitalize">
            Animal details
          </h2>
        </div>
        <form @submit.prevent="register">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-6">
            <div>
              <label class="text-random-50 font-semibold" for="name"
                >Name *</label
              >
              <!-- v-model="animal.name" -->
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="Alex"
              />
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="type"
                >Type *</label
              >
              <!-- v-model="animal.type" -->
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="Lion"
              />
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="gender"
                >Gender *</label
              >
              <!-- v-model="animal.gender" -->
              <select
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                placeholder="Male"
              >
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="male">Male</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white"value="female">Female</option>
              </select>
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="family"
                >Family *</label
              >
              <!-- v-model="animal.family" -->
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                type="text"
                placeholder="Felids"
              />
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="date"
                >Date of entry *</label
              >
              <!-- v-model="animal.date" -->
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                type="date"
              />
            </div>
          </div>
        </form>
      </div>

      <div class="flex justify-end mt-4 space-x-4">
        <button
          class="px-4 py-2 text-random-50 bg-transparent border-2 border-random-50 rounded-full hover:bg-random-50 hover:outline-random-50 hover:text-white"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 text-white bg-random-50 border-2 border-random-50 rounded-full hover:bg-transparent hover:outline-random-50 hover:text-random-50"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

