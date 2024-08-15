import { createApp } from "vue";
import { createPinia } from 'pinia'
import "./style.css";
import App from "./App.vue";
import router from "./router";

import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'

const app = createApp(App);

const pinia = createPinia()

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)

app.use(router);

app.use(pinia)

app.mount("#app");
