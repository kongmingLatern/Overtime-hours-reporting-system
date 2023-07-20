<template>
  <a-row
    class="bg-#f4f4f4 h-[75px]"
    fixed
    bottom-0
    left-0
    w-full
    align="middle"
    justify="center"
  >
    <a-col
      v-for="item in tarbarList"
      :key="item.key"
      :class="item.isActive ? 'text-[#180290]' : 'text-[#afadad]'"
      :span="24 / tarbarList.length"
      text-center
      @click="changeActive(item.key)"
    >
      <a-space direction="vertical" j-a-c :size="0">
        <Icon :icon="item.icon" width="30" />
        <span>{{ item.text }}</span>
      </a-space>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const activeKeys = ref<string>("");

const tarbarList = ref([
  {
    key: "pending",
    icon: "material-symbols:pending-actions",
    text: "待审批",
    link: "/pending",
    isActive: true,
  },
  {
    key: "my",
    icon: "mdi:account",
    text: "我的",
    link: "/my",
    isActive: false,
  },
]);

const changeActive = (key: string) => {
  activeKeys.value = key;

  tarbarList.value.forEach((item) => {
    item.isActive = item.key === key;
  });
};
</script>
