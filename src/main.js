import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/tailwind.css";
import "./styles/main.scss";
import { createHead } from "unhead";

createApp(App).use(router).mount("#app");
createHead();
