import { useProjectMaintain } from "@/store";
import { projectSelect } from "@/utils";
import { reactive, ref } from "vue";

const currentJobNumber = ref(localStorage.getItem("job_number") ?? "");
const res = ref<any>({});

// NOTE: 若当前用户已经登陆，则自动获取当前用户的工号和姓名
(async () => {
  if (currentJobNumber.value) await searchProjectName(currentJobNumber.value);
})();

async function getOptions(job_number) {
  res.value = await projectSelect(
    useProjectMaintain,
    true,
    "job_number",
    job_number
  );
}

export const formState = reactive({
  job_name: localStorage.getItem("job_name") ?? "",
  job_number: currentJobNumber.value,
  start_time: "",
  end_time: "",
  over_time: "",
  project_name: "",
  report_time: "",
  over_time_reason: "",
});

export const ruleState = ref({
  job_name: {
    type: "readonly",
    label: "员工姓名",
  },
  job_number: {
    type: "readonly",
    label: "工号",
    options: {
      onLoad: () => {
        console.log("1", 1);
      },
      onChange: (e) => {
        currentJobNumber.value = e;
      },
      onBlur: async () => {
        await searchProjectName(currentJobNumber.value);
      },
    },
  },
  start_time: {
    type: "date",
    label: "加班开始时间",
  },
  end_time: {
    type: "date",
    label: "加班结束时间",
  },
  over_time: {
    type: "readonly",
    label: "加班时长(时)",
  },
  report_time: {
    type: "date",
    label: "填报时间",
  },
  project_name: {
    type: "select",
    label: "所属项目",
    options: {
      options: [],
    },
  },
  over_time_reason: {
    type: "text",
    label: "加班事由",
  },
});

async function searchProjectName(job_number) {
  await getOptions(job_number);
  Object.assign(
    ruleState.value["project_name"].options.options,
    res.value.options
  );
}
