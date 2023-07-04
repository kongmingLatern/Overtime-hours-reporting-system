import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "@/router";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.use(createPinia());
app.use(Antd);
app.use(router);
app.mount("#app");
