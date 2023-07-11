import App from "./App.vue";
import { createApp } from "vue";
import "@/assets/fullModal.scss";

// ======== Pinia ========
import { createPinia } from "pinia";

// ======== Ant Design Vue ========
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// ======== UNO ========
import "uno.css";
import "@unocss/reset/normalize.css";

// ======== Router ========
import router from "./router";

// ======== ECharts ========
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  LineChart,
  TitleComponent,
  LegendComponent,
]);

const app = createApp(App);
app.component("e-chart", ECharts);
app.use(createPinia());
app.use(Antd);
app.use(router);
app.mount("#app");
