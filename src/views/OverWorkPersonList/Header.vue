<template>
  <div bg="#001529" flex j-a-c h="full">
    <a-space :size="32" direction="vertical">
      <a-row :gutter="[8, 8]">
        <a-col v-for="item in searchList" :key="item.label">
          <SearchInput
            :placeholder="item.placeholder"
            :on-search="item.onSearch"
            class="lg:w-[250px] md:w-[220px] sm:w-[210px] w-[180px]"
          />
        </a-col>
      </a-row>

      <a-row>
        <a-col>
          <RangePicker />
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col v-for="item in singleSelectList" :key="item.label">
          <SingleSelect
            :value="item.value"
            :options="item.options"
            :placeholder="item.placeholder"
            :on-change="item.onChange"
            class="lg:w-[210px] md:w-[160px] sm:w-[130px] w-[110px]"
          />
        </a-col>
      </a-row>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/common/SearchInput";
import SingleSelect from "@/components/common/SingleSelect";
import RangePicker from "@/components/common/RangePicker.vue";
import { searchList, singleSelectList } from "./helpers";
</script>

<style lang="scss" scoped>
:deep(.ant-space-item) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
