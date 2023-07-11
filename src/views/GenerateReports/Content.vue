<template>
  <slot name="toolbar"></slot>
  <CustomTable :columns="columns" :data="data" :loading="loading">
    <template #operation="record">
      <SingleSelect
        v-for="item in singleSelect"
        :key="item.label"
        :value="item.value"
        :options="item.options"
        :placeholder="item.placeholder"
        :on-change="(e) => item.onChange(e, record)"
      />
    </template>
  </CustomTable>
  <a-modal v-model:visible="visible" title="加班时长统计图" @ok="handleOk">
    <div class="max-w-[1200px] h-[500px]">
      <BarChart :option="echarts" />
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import CustomTable from "@/components/common/CustomTable";
import SingleSelect from "@/components/common/SingleSelect";
import { useGenerateReports } from "@/store";
import BarChart from "@/components/common/BarEchart.vue";
import { onMounted, ref } from "vue";
const { data, loading, columns, getAllReportList } = useGenerateReports();
const visible = ref(false);
const echarts = ref({});
const handleOk = (e: MouseEvent) => {
  console.log(e);
  visible.value = false;
};
const singleSelect = [
  {
    label: "报表类型",
    placeholder: "请选择报表类型",
    value: "月度",
    options: [
      {
        value: "月度",
      },
      {
        value: "季度",
      },
    ],
    onChange: (e: any, record) => {
      visible.value = true;
      console.log(e, record);
      echarts.value = {
        title: {
          text: `xx项目${e}加班时长统计`,
        },
        xAxis: {
          data:
            e === "月度"
              ? [
                  "1月",
                  "2月",
                  "3月",
                  "4月",
                  "5月",
                  "6月",
                  "7月",
                  "8月",
                  "9月",
                  "10月",
                  "11月",
                  "12月",
                ]
              : ["1月", "2月", "3月", "4月"],
        },
        yAxis: {},
        series: [
          {
            name: "加班时长统计",
            type: "bar",
            data:
              e === "月度"
                ? [5, 20, 36, 10, 5, 20, 36, 10, 5, 20, 36, 10]
                : [5, 20, 36, 10],
          },
        ],
      };
    },
  },
];
onMounted(async () => {
  await getAllReportList();
});
</script>
