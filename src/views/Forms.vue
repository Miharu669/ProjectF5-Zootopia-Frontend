<script setup>
import { ref, onMounted } from 'vue';
import { useAnimalStore } from '../stores/animalStore';

const animalStore = useAnimalStore();

const name = ref('');
const type = ref('');
const gender = ref('');
const family = ref('');
const dateOfEntry = ref('');

onMounted(async () => {
  await animalStore.fetchTypes();
  await animalStore.fetchFamilies();
});

const register = async () => {
  const newAnimal = {
    name: name.value,
    type: type.value,
    gender: gender.value,
    family: family.value,
    dateOfEntry: dateOfEntry.value
  };

  try {
    await animalStore.addAnimal(newAnimal);
    // Limpiar el formulario después de agregar exitosamente
    name.value = '';
    type.value = '';
    gender.value = '';
    family.value = '';
    dateOfEntry.value = '';
    // Aquí puedes agregar un mensaje de éxito o alguna otra acción
    console.log('Animal añadido con éxito');
  } catch (error) {
    console.error('Error al registrar el animal:', error);
    // Aquí puedes manejar el error, como mostrar un mensaje al usuario
  }
};

const cancel = () => {
  // Limpiar el formulario
  name.value = '';
  type.value = '';
  gender.value = '';
  family.value = '';
  dateOfEntry.value = '';
};
</script>

<template>
  <div class="mt-8">
    <h3 class="text-3xl font-semibold text-marron-800 text-center">
      Add a new animal
    </h3>

    <div v-if="animalStore.isLoading" class="text-center mt-4">
      Loading...
    </div>

    <div v-if="animalStore.error" class="text-red-500 text-center mt-4">
      {{ animalStore.error }}
    </div>

    <div class="mt-12 pb-5" v-if="!animalStore.isLoading">
      <div class="bg-white rounded-3xl shadow-md">
        <div class="bg-random-50 p-4 rounded-t-3xl">
          <h2 class="text-lg font-semibold text-white capitalize">
            Animal details
          </h2>
        </div>
        <form @submit.prevent="register">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-6">
            <div>
              <label class="text-random-50 font-semibold" for="name">Name *</label>
              <input
                v-model="name"
                id="name"
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                type="text" 
                required 
                placeholder="Alex" />
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="type">Type *</label>
              <select
                v-model="type"
                id="type"
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                required>
                <option value="" disabled selected>Select a type</option>
                <option v-for="animalType in animalStore.types" :key="animalType" :value="animalType">
                  {{ animalType }}
                </option>
              </select>
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="gender">Gender *</label>
              <select
                v-model="gender"
                id="gender"
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                required>
                <option value="" disabled selected>Select a gender</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="male">Male</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="female">Female</option>
              </select>
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="family">Family *</label>
              <select
                v-model="family"
                id="family"
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                required>
                <option value="" disabled selected>Select a family</option>
                <option v-for="animalFamily in animalStore.families" :key="animalFamily" :value="animalFamily">
                  {{ animalFamily }}
                </option>
              </select>
            </div>

            <div>
              <label class="text-random-50 font-semibold" for="dateOfEntry">Date of entry *</label>
              <input
                v-model="dateOfEntry"
                id="dateOfEntry"
                class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                type="date" 
                required />
            </div>
          </div>

          <div class="flex justify-end mt-4 space-x-4 p-6">
            <button
              type="button"
              @click="cancel"
              class="px-4 py-2 text-random-50 bg-transparent border-2 border-random-50 rounded-full hover:bg-random-50 hover:outline-random-50 hover:text-white">
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 text-white bg-random-50 border-2 border-random-50 rounded-full hover:bg-transparent hover:outline-random-50 hover:text-random-50">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
