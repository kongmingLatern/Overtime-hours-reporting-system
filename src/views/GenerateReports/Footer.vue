<template>
    <div bg="blue-300" p="5" text="center lg white" font="bold">
      &copy; 2023-2024 Syj & Zmt
      <a-button @click="exportExcel(data, 'demo')"> 导出excel </a-button>
      <BarEchart :option="option" class="h-[300px]" />
    </div>
  </template>
  
  <script setup lang="ts">
  import BarEchart from "@/components/common/BarEchart.vue";
  import { exportExcel } from "@/utils";
  import { computed, ref } from "vue";
  const data: any[] = [
    ["Id", "Title", "Author"],
    ["123", "egegerg", "why"],
  ];
  
  const echartData = ref([
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
        data: echartData.value.map((el) => el.name),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: echartData.value.map((el) => el.value),
          type: "bar",
        },
      ],
    };
  });
  </script>
  