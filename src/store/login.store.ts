import { reactive } from "vue";

export function useLogin() {
  const formState = reactive({
    job_number: "",
    password: "",
  });

  const ruleState = {
    job_number: {
      type: "text",
      label: "工号",
      placeholder: "请输入工号",
      rules: [{ required: true, message: "请输入工号", trigger: "blur" }],
    },
    password: {
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
      rules: [{ required: true, message: "请输入密码", trigger: "blur" }],
    },
  };

  return {
    formState,
    ruleState,
  };
}
