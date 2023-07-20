<template>
  <div bg="#001529" flex j-a-c h="full">
    <a-space :size="32" direction="vertical">
      <a-row :gutter="[8, 8]">
        <a-col v-for="item in searchList" :key="item.label">
          <SearchInput
            :placeholder="item.placeholder"
            :on-search="item.onSearch"
            class="lg:w-[250px] md:w-[230px] sm:w-[210px] w-[150px]"
          />
        </a-col>
      </a-row>

      <a-row :gutter="[8, 8]">
        <a-col v-for="item in singleSelectList" :key="item.label">
          <SingleSelect
            :value="item.value"
            :options="item.options"
            :placeholder="item.placeholder"
            :on-change="item.onChange"
            class="lg:w-[330px] md:w-[320px] sm:w-[310px] w-[300px]"
          />
        </a-col>
      </a-row>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/common/SearchInput";
import SingleSelect from "@/components/common/SingleSelect";
import { searchList, singleSelectList } from "./helpers";
</script>

<style lang="scss" scoped>
:deep(.ant-space-item) {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
./helpers/searchList ./helpers/singleSelectList
