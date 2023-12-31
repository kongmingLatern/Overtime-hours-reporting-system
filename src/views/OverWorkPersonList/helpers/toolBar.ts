import { useDepartmentSearch, useProjectMaintain } from "@/store";
import { departmentSelect, projectSelect } from "@/utils";
import { reactive, ref, watch } from "vue";

const departmentName = ref("");
const res = ref<any>({});

export const formState = reactive({
  job_number: "",
  job_name: "",
  department_name: departmentName.value,
  project_name: "",
  start_time: "",
  end_time: "",
  over_time: "",
  report_time: "",
  status: "",
  reason: "",
});

async function get() {
  res.value = await projectSelect(
    useProjectMaintain,
    true,
    "department_name",
    departmentName.value
  );
  console.log("res", res.value.options);
  return res;
}

export const ruleState = ref({
  job_number: {
    type: "number",
    label: "工号",
    rules: [
      {
        required: true,
        message: "请输入工号",
        trigger: "blur",
      },
    ],
  },
  job_name: {
    type: "string",
    label: "姓名",
    rules: [
      {
        required: true,
        message: "请输入姓名",
        trigger: "blur",
      },
    ],
  },
  department_name: {
    type: "select",
    label: "所属部门",
    rules: [
      {
        required: true,
        message: "请输入所属部门",
        trigger: "blur",
      },
    ],
    options: {
      options: (await departmentSelect(useDepartmentSearch)).options,
      onChange: (e) => {
        departmentName.value = e;
        get();
      },
    },
  },
  project_name: {
    type: "select",
    label: "所属项目",
    rules: [
      {
        required: true,
        message: "请输入所属项目",
        trigger: "blur",
      },
    ],
    options: {
      options: [],
    },
  },
  status: {
    type: "select",
    label: "表单状态",
    rules: [
      {
        required: true,
        message: "请选择表单状态",
        trigger: "blur",
      },
    ],
    options: {
      options: [
        {
          value: "已驳回",
          label: "已驳回",
        },
        {
          value: "已通过",
          label: "已通过",
        },
        {
          value: "已提交",
          label: "已提交",
        },
      ],
    },
  },
  start_time: {
    type: "date",
    label: "加班开始时间",
    rules: [
      {
        required: true,
        message: "请输入加班开始时间",
        trigger: "blur",
      },
    ],
  },
  end_time: {
    type: "date",
    label: "加班结束时间",
    rules: [
      {
        required: true,
        message: "请输入加班结束时间",
        trigger: "blur",
      },
    ],
  },
  over_time: {
    type: "readonly",
    label: "加班时长(时)",
  },
  report_time: {
    type: "date",
    label: "填报时间",
    rules: [
      {
        required: true,
        message: "请输入填报时间",
        trigger: "blur",
      },
    ],
  },
  over_time_reason: {
    type: "text",
    label: "加班事由",
    rules: [
      {
        required: true,
        message: "请输入加班事由",
        trigger: "blur",
      },
    ],
  },
});

watch(
  () => formState["department_name"],
  async (newVal) => {
    async function get() {
      res.value = await projectSelect(
        useProjectMaintain,
        true,
        "department_name",
        newVal
      );
      Object.assign(
        ruleState.value["project_name"].options.options,
        res.value.options
      );
    }
    await get();
  }
);
