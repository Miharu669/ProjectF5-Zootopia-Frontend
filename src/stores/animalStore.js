import { defineStore } from "pinia";
import axios from "axios";

const createApi = (baseURL = "http://localhost:8080/api/animals") => {
  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      if (response) {
        switch (response.status) {
          case 400:
            throw new Error(`Bad Request: ${response.data || "The request could not be understood or was missing required parameters."}`);
          case 401:
            throw new Error(`Unauthorized: ${response.data || "Authentication credentials were missing or incorrect."}`);
          case 403:
            throw new Error(`Forbidden: ${response.data || "The request is understood, but it has been refused or access is not allowed."}`);
          case 404:
            throw new Error(`Not Found: ${response.data || "The requested resource could not be found."}`);
          case 500:
            throw new Error(`Server Error: ${response.data || "An error occurred on the server while processing the request."}`);
          default:
            throw new Error(`Unexpected Error: ${response.data || "An unexpected error occurred."}`);
        }
      }
      throw error;
    }
  );

  return api;
};

export const useAnimalStore = defineStore({
  id: "animal",
  state: () => ({
    animals: [],
    error: null,
    isLoading: false,
  }),
  getters: {
    getRequestById: (state) => (id) => state.animals.find((req) => req.id === id),
    totalRequests: (state) => state.animals.length,
  },
  actions: {
    async fetchAllAnimals(api = createApi()) {
      this.isLoading = true;
      try {
        const { data } = await api.get("");
        this.animals = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async createAnimal(newAnimal, api = createApi()) {
      this.isLoading = true;
      try {
        const { data } = await api.post("", newAnimal);
        this.animals.push(data);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async updateAnimal(id, updatedAnimal, api = createApi()) {
      this.isLoading = true;
      try {
        const { data } = await api.put(`/${id}`, updatedAnimal);
        const index = this.animals.findIndex((req) => req.id === id);
        if (index !== -1) {
          this.animals[index] = data;
        } else {
          throw new Error(`Request with id ${id} not found in local state.`);
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async deleteAnimal(id, api = createApi()) {
      this.isLoading = true;
      try {
        await api.delete(`/${id}`);
        this.animals = this.animals.filter((req) => req.id !== id);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    clearError() {
      this.error = null;
    },
  },
});
