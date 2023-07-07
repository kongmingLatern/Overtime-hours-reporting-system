<template>
  <e-chart class="chart" :option="option" />
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const data = ref([
  { value: 67, name: "A" },
  { value: 40, name: "B" },
  { value: 120, name: "C" },
  { value: 58, name: "D" },
  { value: 85, name: "E" },
]);

const option = computed(() => {
  return {
    xAxis: {
      type: "category",
      data: data.value.map((el) => el.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.value.map((el) => el.value),
        type: "line",
      },
    ],
  };
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
