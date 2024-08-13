<script setup>
import { ref,  defineProps, watch } from "vue";
import { useAnimalStore } from "../stores/animalStore";

const props = defineProps({
  animal: Object,
});

const openModify = ref(false);
const isSubmitting = ref(false);
const selectedAnimal = ref({ id: null });

const name = ref('');
const type = ref('');
const gender = ref('');
const family = ref('');
const dateOfEntry = ref('');

watch(() => props.animal, (newAnimal) => {
  if (newAnimal) {
    selectedAnimal.value = newAnimal;
    name.value = newAnimal.name;
    type.value = newAnimal.type;
    gender.value = newAnimal.gender;
    family.value = newAnimal.family;
    dateOfEntry.value = newAnimal.dateOfEntry;
    openModify.value = true;
  }
});

const updateAnimal = async () => {
  if (!selectedAnimal.value.id) {
    console.error('No animal ID found.');
    return;
  }

  isSubmitting.value = true;
  const updatedAnimal = {
    name: name.value,
    type: type.value,
    gender: gender.value,
    family: family.value,
    dateOfEntry: dateOfEntry.value,
  };

  try {
    await animalStore.updateAnimal(selectedAnimal.value.id, updatedAnimal);
    openModify.value = false;
  } catch (error) {
    console.error('Error updating animal:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div>
    <button
      class="py-3 mt-3 font-medium tracking-wide text-white focus:outline-none"
      @click="openModify = true"
    >
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

    <div
      :class="`modal ${
        !openModify && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="openModify = false"
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

        <!-- Add margin if you want to see some of the overlay behind the modal -->
        <div class="px-6 py-4 text-left modal-content">
          <!-- Title -->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl text-center font-bold">Modify item</p>
            <div
              class="z-50 cursor-pointer modal-close"
              @click="openModify = false"
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
          <form @submit.prevent="register">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 p-6">
              <div>
                <label class="text-random-50 font-semibold" for="name"
                  >Name *</label
                >
                <input
                  v-model="name"
                  id="name"
                  class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                  type="text"
                  required
                  placeholder="Alex"
                />
              </div>

              <div>
                <label class="text-random-50 font-semibold" for="type"
                  >Type *</label
                >
                <select
                  v-model="type"
                  id="type"
                  class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="" disabled selected>Select a type</option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Lion"
                  >
                    Lion
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Tiger"
                  >
                    Tiger
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Wolf"
                  >
                    Wolf
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Fox"
                  >
                    Fox
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Crocodile"
                  >
                    Crocodile
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Snake"
                  >
                    Snake
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Otter"
                  >
                    Otter
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Weasel"
                  >
                    Weasel
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Rabbit"
                  >
                    Rabbit
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Hare"
                  >
                    Hare
                  </option>
                </select>
              </div>
              <div>
                <label class="text-random-50 font-semibold" for="gender"
                  >Gender *</label
                >
                <select
                  v-model="gender"
                  id="gender"
                  class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="" disabled selected>Select a gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label class="text-random-50 font-semibold" for="family"
                  >Family *</label
                >
                <select
                  v-model="family"
                  id="family"
                  class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="" disabled selected>Select a family</option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Felidae"
                  >
                    Felidae
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Canidae"
                  >
                    Canidae
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Reptilia"
                  >
                    Reptilia
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Mustelidae"
                  >
                    Mustelidae
                  </option>
                  <option
                    class="text-random-50 hover:bg-random-50 hover:text-white"
                    value="Lion"
                  >
                    Leporidae
                  </option>
                </select>
              </div>

              <div>
                <label class="text-random-50 font-semibold" for="dateOfEntry"
                  >Date of entry *</label
                >
                <input
                  v-model="dateOfEntry"
                  id="dateOfEntry"
                  class="block w-full px-4 py-2 mt-2 text-gray-900 placeholder-gris-300 bg-transparent border border-random-50 rounded-md focus:ring-random-50 focus:outline-random-50 focus:ring focus:ring-opacity-40"
                  type="date"
                  required
                />
              </div>
            </div>
          </form>
          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <div class="flex justify-end mt-4 space-x-4">
              <button
                class="px-4 py-2 text-random-50 bg-transparent border-2 border-random-50 rounded-full hover:bg-random-50 hover:outline-random-50 hover:text-white"
                type="button"
                :disabled="isSubmitting"
                @click="openModify = false"
              >
                Cancel
              </button>
              <button
                :disabled="isSubmitting"
                type="button"
                @click="updateAnimal"
                class="px-4 py-2 text-white bg-random-50 border-2 border-random-50 rounded-full hover:bg-transparent hover:outline-random-50 hover:text-random-50"
              >
                Save
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
