import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import DeleteModal from "./../components/DeleteModal.vue";
import { useAnimalStore } from "./../stores/animalStore";

vi.mock("@/stores/animalStore", () => ({
  useAnimalStore: () => ({
    deleteAnimal: vi.fn(),
  }),
}));

describe("DeleteModal.vue", () => {
  let wrapper;
  let animalStore;
  const animal = { id: 1, name: "Lion" };

  beforeEach(() => {
    animalStore = useAnimalStore();
    animalStore.deleteAnimal.mockClear();

    const pinia = createPinia();

    wrapper = mount(DeleteModal, {
      props: { animal },
      global: {
        plugins: [pinia],
      },
    });
  });

  it("renders the component correctly", () => {
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find(".modal").exists()).toBe(true);
    expect(wrapper.find(".modal-content").exists()).toBe(true);
  });

  it("closes the modal when the overlay is clicked", async () => {
    await wrapper.find("button").trigger("click");

    await wrapper.find(".modal-overlay").trigger("click");

    expect(wrapper.find(".modal").classes()).toContain("opacity-0");
  });

  it("does not call deleteAnimal if modal is cancelled", async () => {
    await wrapper.find("button").trigger("click");

    await wrapper.find("button.text-random-50").trigger("click");

    expect(animalStore.deleteAnimal).not.toHaveBeenCalled();
  });
});
