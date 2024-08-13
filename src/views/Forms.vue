<script setup>
import { ref } from 'vue';
import { useAnimalStore } from '../stores/animalStore';

const animalStore = useAnimalStore();

const name = ref('');
const type = ref('');
const gender = ref('');
const family = ref('');
const dateOfEntry = ref('');

const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const register = async () => {
  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  const newAnimal = {
    name: name.value,
    typeName: type.value,
    gender: gender.value,
    dateOfEntry: dateOfEntry.value ? new Date(dateOfEntry.value).toISOString().split('T')[0] : null,
  };

  try {
    await animalStore.addAnimal(newAnimal);
    clearForm();
    successMessage.value = 'Animal añadido con éxito';
  } catch (error) {
    console.error('Error al registrar el animal:', error);
    errorMessage.value = 'Hubo un error al añadir el animal. Por favor, intenta de nuevo más tarde.';
  } finally {
    isSubmitting.value = false;
  }
};

const clearForm = () => {
  name.value = '';
  type.value = '';
  gender.value = '';
  family.value = '';
  dateOfEntry.value = '';
};

const cancel = () => {
  clearForm();
  errorMessage.value = '';
  successMessage.value = '';
};
</script>

<template>
  <div class="mt-8">
    <h3 class="text-3xl font-semibold text-marron-800 text-center">
      Add a new animal
    </h3>

    <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">{{ errorMessage }}</span>
    </div>

    <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
      <strong class="font-bold">Success!</strong>
      <span class="block sm:inline">{{ successMessage }}</span>
    </div>

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
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Lion">Lion</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Tiger">Tiger</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Wolf">Wolf</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Fox">Fox</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Crocodile">Crocodile</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Snake">Snake</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Otter">Otter</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Weasel">Weasel</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Rabbit">Rabbit</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Hare">Hare</option>
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
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Felidae">Felidae</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Canidae">Canidae</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Reptilia">Reptilia</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Mustelidae">Mustelidae</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Lion">Leporidae</option>
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
              :disabled="isSubmitting"
              class="px-4 py-2 text-random-50 bg-transparent border-2 border-random-50 rounded-full hover:bg-random-50 hover:outline-random-50 hover:text-white disabled:opacity-50">
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-4 py-2 text-white bg-random-50 border border-random-50 rounded-full hover:bg-random-200 disabled:opacity-50">
              {{ isSubmitting ? 'Submitting...' : 'Add Animal' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

