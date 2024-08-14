
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useAnimalStore } from '../stores/animalStore.js';

const props = defineProps({
  isVisible: Boolean,
  animal: Object
});

const emit = defineEmits(['update:animal', 'close']);

const animalStore = useAnimalStore();
const types = ref([]);
const families = ref([]);
const isSubmitting = ref(false);

const isEditMode = computed(() => props.animal !== null);
const animal = ref({ 
  name: '',
  typeName: '',
  gender: '',
  family: '',
  dateOfEntry: ''
});

watch(() => props.animal, (newValue) => {
  if (newValue) {
    animal.value = { ...newValue };
  } else {
    animal.value = { 
      name: '',
      typeName: '',
      gender: '',
      family: '',
      dateOfEntry: ''
    };
  }
}, { immediate: true });

const fetchData = async () => {
  if (animalStore.types.length === 0) {
    await animalStore.fetchTypes();
    types.value = animalStore.types;
  }
  if (animalStore.families.length === 0) {
    await animalStore.fetchFamilies();
    families.value = animalStore.families;
  }
};

const submitForm = async () => {
  isSubmitting.value = true;
  try {
    if (isEditMode.value) {
      await animalStore.updateAnimal(animal.value.id, animal.value);
    } else {
      await animalStore.addAnimal(animal.value);
    }
    emit('update:animal');
    closeModal();
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};

const closeModal = () => {
  emit('close');
};

onMounted(() => {
  fetchData();
});
</script>
<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg shadow-lg w-full max-w-lg">
      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-2xl font-bold text-gris-950">{{ isEditMode ? 'Edit Animal' : 'Add Animal' }}</h2>
        <button @click="closeModal" class="text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="p-4">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-6">
          <!-- Name -->
          <div>
            <label for="name" class="text-random-50 font-semibold">Name *</label>
            <input v-model="animal.name" id="name" type="text" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"/>
          </div>

          <!-- Type -->
          <div>
            <label for="type" class="text-random-50 font-semibold">Type *</label>
            <select v-model="animal.typeName" id="type" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40">
              <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
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

          <!-- Gender -->
          <div>
            <label for="gender" class="text-random-50 font-semibold">Gender *</label>
            <select v-model="animal.gender" id="gender" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40">
              <option value="" disabled>Select a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <!-- Family -->
          <div>
            <label for="family" class="text-random-50 font-semibold">Family *</label>
            <select v-model="animal.family" id="family" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40">
              <option value="" disabled>Select a family</option>
              <option v-for="family in families" :key="family" :value="family">{{ family }}</option>
              <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Felidae">Felidae</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Canidae">Canidae</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Reptilia">Reptilia</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Mustelidae">Mustelidae</option>
                <option class="text-random-50 hover:bg-random-50 hover:text-white" value="Lion">Leporidae</option>
            </select>
          </div>

          <!-- Date of Entry -->
          <div>
            <label for="dateOfEntry" class="text-random-50 font-semibold">Date of Entry *</label>
            <input v-model="animal.dateOfEntry" id="dateOfEntry" type="date" required class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"/>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-end mt-4 space-x-4">
          <button type="button" @click="closeModal" class="px-4 py-2 text-random-50 bg-transparent border-2 border-random-50 rounded-full hover:bg-random-50 hover:outline-random-50 hover:text-white">Cancel</button>
          <button type="submit" :disabled="isSubmitting" class="px-4 py-2 text-white bg-random-50 border-2 border-random-50 rounded-full hover:bg-transparent hover:outline-random-50 hover:text-random-50">
            {{ isEditMode ? 'Update' : 'Save' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
