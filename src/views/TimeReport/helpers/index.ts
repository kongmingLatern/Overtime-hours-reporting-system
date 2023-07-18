import { useProjectMaintain } from "@/store";
import { projectSelect } from "@/utils";
import { ref } from "vue";

const currentJobNumber = ref("");
const res = ref<any>({});

async function getOptions(job_number) {
  res.value = await projectSelect(
    useProjectMaintain,
    true,
    "job_number",
    job_number
  );
}

export const ruleState = {
  job_name: {
    type: "text",
    label: "员工姓名",
  },
  job_number: {
    type: "number",
    label: "工号",
    options: {
      onChange: (e) => {
        currentJobNumber.value = e;
      },
      onBlur: async () => {
        await getOptions(currentJobNumber.value);
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
  project_name: {
    type: "select",
    label: "所属项目",
    options: {
      options: res.value.options,
      // options: (await projectSelect(useProjectMaintain)).options,
    },
  },
  over_time_reason: {
    type: "text",
    label: "加班事由",
  },
};
