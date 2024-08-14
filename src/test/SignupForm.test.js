import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import axios from "axios";
import LoginForm from "./../components/auth/SignupForm.vue";
import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

// Mock axios
vi.mock("axios");

describe("LoginForm.vue", () => {
  let wrapper;
  let router;
  let pushMock;

  beforeEach(() => {
    pushMock = vi.fn();

    router = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/dashboard", name: "dashboard" }],
    });

    router.push = pushMock;

    wrapper = mount(LoginForm, {
      global: {
        plugins: [router],
      },
    });
  });

  it("renders the form", () => {
    expect(wrapper.find("form").exists()).toBe(true);
    expect(wrapper.find("input#username").exists()).toBe(true);
    expect(wrapper.find("input#password").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Sign in");
  });

  it("submits the form and redirects on success", async () => {
    axios.post.mockResolvedValue({
      data: { username: "testuser", roles: ["user"] },
    });

    await wrapper.find("input#username").setValue("testuser");
    await wrapper.find("input#password").setValue("password123");

    await wrapper.find("form").trigger("submit.prevent");

    await nextTick();

    expect(pushMock).toHaveBeenCalledWith("/dashboard");
  });

  it("displays an error message on login failure", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Login failed" } },
    });

    await wrapper.find("input#username").setValue("testuser");
    await wrapper.find("input#password").setValue("wrongpassword");

    await wrapper.find("form").trigger("submit.prevent");

    await nextTick();

    expect(wrapper.find("div.mt-4.text-red-500").text()).toContain(
      "Login failed"
    );
  });
});
