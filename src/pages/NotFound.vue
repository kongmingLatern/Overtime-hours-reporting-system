<template>
  <a-result status="404" title="404" sub-title="对不起,您所访问的页面不存在">
    <template #extra>
      <a-button type="primary" @click="goTo(RouterName.HOME)"
        >回到首页</a-button
      >
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { useGoto } from "@/composables";
import { RouterName } from "@/router/RouterName";
const { goTo } = useGoto();
</script>
