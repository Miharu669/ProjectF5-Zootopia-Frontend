

//   api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       const { response } = error;
//       if (response) {
//         switch (response.status) {
//           case 400:
//             throw new Error(`Bad Request: ${response.data || "The request could not be understood or was missing required parameters."}`);
//           case 401:
//             throw new Error(`Unauthorized: ${response.data || "Authentication credentials were missing or incorrect."}`);
//           case 403:
//             throw new Error(`Forbidden: ${response.data || "The request is understood, but it has been refused or access is not allowed."}`);
//           case 404:
//             throw new Error(`Not Found: ${response.data || "The requested resource could not be found."}`);
//           case 500:
//             throw new Error(`Server Error: ${response.data || "An error occurred on the server while processing the request."}`);
//           default:
//             throw new Error(`Unexpected Error: ${response.data || "An unexpected error occurred."}`);
//         }
//       }
//       throw error;
//     }
//   );

//   return api;
// };



import { defineStore } from 'pinia';
import axios from 'axios';


const BASE_URL = 'http://localhost:8080/api/v1/animals';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useAnimalStore = defineStore('animal', {
  state: () => ({
    animals: [],
    families: [],
    types: [],
    error: null,
    isLoading: false,
  }),
  actions: {
    async fetchAnimals() {
      this.isLoading = true;
      try {
        const response = await api.get('/all');
        this.animals = response.data;
      } catch (error) {
        this.error = 'Error fetching animals: ' + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchFamilies() {
      this.isLoading = true;
      try {
        const response = await api.get('/families');
        this.families = response.data;
      } catch (error) {
        this.error = 'Error fetching families: ' + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchTypes() {
      this.isLoading = true;
      try {
        const response = await api.get('/types');
        this.types = response.data;
      } catch (error) {
        this.error = 'Error fetching types: ' + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    async addAnimal(newAnimal) {
      this.isLoading = true;
      try {
        await api.post('/animals/add', newAnimal);
        this.fetchAnimals(); 
      } catch (error) {
        this.error = 'Error adding animal: ' + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    async updateAnimal(id, updatedAnimal) {
      this.isLoading = true;
      try {
        await api.put(`/animals/update/${id}`, updatedAnimal);
        this.fetchAnimals(); 
      } catch (error) {
        this.error = `Error updating animal with ID ${id}: ` + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

    async deleteAnimal(id) {
      this.isLoading = true;
      try {
        await api.delete(`/animals/delete/${id}`);
        this.fetchAnimals(); 
      } catch (error) {
        this.error = `Error deleting animal with ID ${id}: ` + error.message;
        console.error(this.error);
      } finally {
        this.isLoading = false;
      }
    },

  //   async addFamily(newFamily) {
  //     this.isLoading = true;
  //     try {
  //       await api.post('/families/add', newFamily);
  //       this.fetchFamilies(); 
  //     } catch (error) {
  //       this.error = 'Error adding family: ' + error.message;
  //       console.error(this.error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },

  //   async updateFamily(id, updatedFamily) {
  //     this.isLoading = true;
  //     try {
  //       await api.put(`/families/update/${id}`, updatedFamily);
  //       this.fetchFamilies(); 
  //     } catch (error) {
  //       this.error = `Error updating family with ID ${id}: ` + error.message;
  //       console.error(this.error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },

  //   async deleteFamily(id) {
  //     this.isLoading = true;
  //     try {
  //       await api.delete(`/families/delete/${id}`);
  //       this.fetchFamilies(); 
  //     } catch (error) {
  //       this.error = `Error deleting family with ID ${id}: ` + error.message;
  //       console.error(this.error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },

  //   async addType(newType) {
  //     this.isLoading = true;
  //     try {
  //       await api.post('/types/add', newType);
  //       this.fetchTypes(); 
  //     } catch (error) {
  //       this.error = 'Error adding type: ' + error.message;
  //       console.error(this.error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },

  //   async updateType(id, updatedType) {
  //     this.isLoading = true;
  //     try {
  //       await api.put(`/types/update/${id}`, updatedType);
  //       this.fetchTypes(); 
  //     } catch (error) {
  //       this.error = `Error updating type with ID ${id}: ` + error.message;
  //       console.error(this.error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },

  //   async deleteType(id) {
  //     this.isLoading = true;
  //     try {
  //       await api.delete(`/types/delete/${id}`);
  //       this.fetchTypes(); 
  //     } catch (error) {
  //       this.error = `Error deleting type with ID ${id}: ` + error.message;
  //       console.error(this.error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },
  },
});

