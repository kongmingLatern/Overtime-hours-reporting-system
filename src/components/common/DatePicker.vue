<template>
  <a-date-picker show-time placeholder="请选择项目时间" @change="onChange" />
</template>

<script setup lang="ts">
import { useProjectMaintain } from "@/store";
import dayjs, { Dayjs } from "dayjs";

const onChange = (_: Dayjs, dateString: string) => {
  const { data } = useProjectMaintain();
  data.value = data.value.filter((item) => {
    const start = dayjs(item.project_time).valueOf();

    const endTime = dayjs(dateString).valueOf();

    return start <= endTime;
  });
};
</script>

<style scoped></style>
