<template>
  <div bg="#001529" flex j-a-c h="full">
    <a-space :size="32" direction="vertical">
      <a-row :gutter="[8, 8]" class="j-a-c">
        <a-col v-for="item in searchList" :key="item.label">
          <SearchInput
            :placeholder="item.placeholder"
            :on-search="item.onSearch"
            class="lg:w-[250px] md:w-[230px] sm:w-[210px] w-[150px]"
          />
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <DatePicker class="w-[300px] lg:w-[400px]" />
        </a-col>
      </a-row>
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
  justify-content: center;
  align-items: center;
}
</style>
