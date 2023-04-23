import "v-calendar/dist/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import VCalendar from "v-calendar";
import Toaster from "@meforma/vue-toaster";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
library.add(fas);

createApp(App)
  .use(router)
  .use(Toaster)
  .use(VCalendar, {})
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
