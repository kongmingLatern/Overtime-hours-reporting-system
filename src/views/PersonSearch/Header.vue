<template>
  <div bg="#001529" flex j-a-c h="full">
    <a-space :size="32" direction="vertical">
      <a-space :size="32">
        <SearchInput
          v-for="item in searchList"
          :key="item.label"
          :placeholder="item.placeholder"
          :on-search="item.onSearch"
        />
      </a-space>

      <a-space :size="32">
        <SingleSelect
          v-for="item in singleSelectList"
          :key="item.label"
          :value="item.value"
          :options="item.options"
          :placeholder="item.placeholder"
          :on-change="item.onChange"
          class="w-[210px]"
        />
      </a-space>
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
