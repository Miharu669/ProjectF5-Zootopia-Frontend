import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useAnimalStore } from "../stores/animalStore.js";
import axios from "axios";

vi.mock("axios");

describe("Animal Store", () => {
  let animalStore;
  let mockApi;

  beforeEach(() => {
    setActivePinia(createPinia());
    animalStore = useAnimalStore();

    mockApi = {
      get: vi.fn(),
      post: vi.fn(),
      put: vi.fn(),
      delete: vi.fn(),
      interceptors: {
        response: {
          use: vi.fn(),
        },
      },
    };
    axios.create.mockReturnValue(mockApi);
  });

  it("fetchAllAnimals should fetch and update animals", async () => {
    const animals = [
      { id: 1, name: "Elephant", type: "Mammal" },
      { id: 2, name: "Tiger", type: "Mammal" },
    ];

    mockApi.get.mockResolvedValueOnce({ data: animals });

    await animalStore.fetchAllAnimals();

    expect(animalStore.animals).toEqual(animals);
    expect(animalStore.isLoading).toBe(false);
    expect(animalStore.error).toBeNull();
  });

  it("createAnimal should add a new animal", async () => {
    const newAnimal = { id: 3, name: "Lion", type: "Mammal" };

    mockApi.post.mockResolvedValueOnce({ data: newAnimal });

    await animalStore.createAnimal(newAnimal);

    expect(animalStore.animals).toContainEqual(newAnimal);
    expect(animalStore.isLoading).toBe(false);
    expect(animalStore.error).toBeNull();
  });

  it("updateAnimal should update an existing animal", async () => {
    const updatedAnimal = { id: 1, name: "Elephant", type: "Mammal" };
    animalStore.animals = [{ id: 1, name: "Elefant", type: "Mammal" }];

    mockApi.put.mockResolvedValueOnce({ data: updatedAnimal });

    await animalStore.updateAnimal(1, updatedAnimal);

    expect(animalStore.animals[0]).toEqual(updatedAnimal);
    expect(animalStore.isLoading).toBe(false);
    expect(animalStore.error).toBeNull();
  });

  it("deleteAnimal should remove an animal", async () => {
    const animalId = 1;
    animalStore.animals = [{ id: animalId, name: "Elephant", type: "Mammal" }];

    mockApi.delete.mockResolvedValueOnce({});

    await animalStore.deleteAnimal(animalId);

    expect(animalStore.animals).not.toContainEqual(
      expect.objectContaining({ id: animalId })
    );
    expect(animalStore.isLoading).toBe(false);
    expect(animalStore.error).toBeNull();
  });

  it("clearError should clear the error state", () => {
    animalStore.error = "Some error";
    animalStore.clearError();

    expect(animalStore.error).toBeNull();
  });
});
