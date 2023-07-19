<template>
  <a-date-picker placeholder="请选择项目时间" @change="onChange" />
</template>

<script setup lang="ts">
import { useProjectMaintain } from "@/store";
import dayjs, { Dayjs } from "dayjs";
const { data, init } = useProjectMaintain();

const onChange = async (_: Dayjs, dateString: string) => {
  await init();
  data.value = data.value.filter((item) => {
    const start = dayjs(
      dayjs(item.project_time).format("YYYY-MM-DD")
    ).valueOf();
    const endTime = dayjs(dateString).valueOf();

    return start <= endTime;
  });
};
</script>

<style scoped></style>
