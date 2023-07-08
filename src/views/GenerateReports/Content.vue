<template>
    <slot name="toolbar"></slot>
    <CustomTable :columns="generateResportsColumns" :data="generateResportsDataSource">
      
    </CustomTable>
  </template>
  
  <script setup lang="ts">
  import CustomTable from "@/components/common/CustomTable";
  import {generateResportsColumns, generateResportsDataSource } from "@/store";
  
  const ruleState = {
    job_name: {
      type: "string",
      label: "员工姓名",
      rules: [
        {
          required: true,
          message: "请输入员工姓名",
          trigger: "blur",
        },
      ],
    },
    work_name: {
      type: "string",
      label: "项目名称",
      rules: [
        {
          required: true,
          message: "请输入项目名称",
          trigger: "blur",
        },
      ],
    },
    department_name: {
      type: "string",
      label: "部门名称",
      rules: [
        {
          required: true,
          message: "请输入部门名称",
          trigger: "blur",
        },
      ],
    },
    // line_number: {
    //   type: "string",
    //   label: "所属条线",
    //   rules: [
    //     {
    //       required: true,
    //       message: "请输入所属条线",
    //       trigger: "blur",
    //     },
    //   ],
    // },  
  };
  </script>