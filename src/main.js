import "v-calendar/dist/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import VCalendar from "v-calendar";
import Toaster from "@meforma/vue-toaster";

createApp(App).use(router).use(Toaster).use(VCalendar, {}).mount("#app");
