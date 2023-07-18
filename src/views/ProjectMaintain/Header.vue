<template>
  <div bg="#001529" flex j-a-c h="150px">
    <a-space :size="32" direction="horizontal">
      <a-space :size="32">
        <SearchInput
          v-for="item in searchList"
          :key="item.label"
          :placeholder="item.placeholder"
          :on-search="item.onSearch"
        />
        <DatePicker />
      </a-space>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/common/SearchInput";
import { searchList } from "./helpers";
import DatePicker from "@/components/common/DatePicker.vue";
</script>

<style lang="scss" scoped>
:deep(.ant-space-item) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
