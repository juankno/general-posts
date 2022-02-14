import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dayjs from "dayjs";

import "./assets/css/tailwind.css";

createApp(App).use(store).use(router).use(dayjs).mount("#app");
