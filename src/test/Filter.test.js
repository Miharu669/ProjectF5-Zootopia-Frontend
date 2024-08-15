import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { nextTick } from "vue";
import Filter from "./../components/Filter.vue";
import { useAnimalStore } from "./../stores/animalStore.js";

vi.mock("./../stores/animalStore.js", () => ({
  useAnimalStore: vi.fn(),
}));

describe("Filter", () => {
  let wrapper;
  let mockAnimalStore;

  beforeEach(() => {
    setActivePinia(createPinia());
    mockAnimalStore = {
      fetchFamilies: vi.fn(),
      applyFilters: vi.fn(),
      families: [
        { id: 1, name: "Felidae" },
        { id: 2, name: "Canidae" },
        { id: 3, name: "Reptilia" },
      ],
    };
    useAnimalStore.mockReturnValue(mockAnimalStore);

    wrapper = mount(Filter);
  });

  it("renders correctly", () => {
    expect(wrapper.find("details").exists()).toBe(true);
    expect(wrapper.find("summary").text()).toContain("Filter");
  });

  it("fetches families on mount", async () => {
    expect(mockAnimalStore.fetchFamilies).toHaveBeenCalled();
    await nextTick();
    expect(wrapper.findAll("li").length).toBe(3);
  });

  it("updates selected filters when checkboxes are clicked", async () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked();
    expect(wrapper.vm.selectedFilters).toContain("Felidae");
  });

  it("resets filters when reset button is clicked", async () => {
    await wrapper.find('input[type="checkbox"]').setChecked();
    await wrapper.find("button:first-of-type").trigger("click");
    expect(wrapper.vm.selectedFilters).toEqual([]);
    expect(mockAnimalStore.applyFilters).toHaveBeenCalledWith([]);
  });
});
