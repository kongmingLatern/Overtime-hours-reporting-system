<template>
  <e-chart :option="props.option" />
</template>

<script setup lang="ts">
const props = defineProps<{
  option: any;
}>();
</script>
