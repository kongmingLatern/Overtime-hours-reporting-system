<template>
  <a-range-picker
    show-time
    format="YYYY-MM-DD HH:mm:ss"
    :placeholder="['选择加班开始时间', '选择加班结束时间']"
    @change="onRangeChange"
  />
</template>

<script setup lang="ts">
import { useOverWorkPersonList } from "@/store";
import dayjs, { Dayjs } from "dayjs";
const onRangeChange = (_: [Dayjs, Dayjs], dateString: [string, string]) => {
  const { data } = useOverWorkPersonList();

  data.value = data.value.filter((item) => {
    const startTime = dayjs(dateString[0]).valueOf();
    const endTime = dayjs(dateString[1]).valueOf();
    const start = dayjs(item.start_time).valueOf();
    const end = dayjs(item.end_time).valueOf();
    return start >= startTime && end <= endTime;
  });
};
</script>

<style scoped></style>
