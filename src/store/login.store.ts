import { fetchLogin } from "@/api";
import { useGoto } from "./../composables/useGoto";
import { message } from "ant-design-vue";
import { reactive } from "vue";

export function useLogin() {
  const { goToAdmin } = useGoto();

  const formState = reactive({
    job_name: "",
    job_number: "",
  });

  const ruleState = {
    job_name: {
      type: "text",
      label: "帐号",
      placeholder: "请输入帐号",
      rules: [{ required: true, message: "请输入帐号", trigger: "blur" }],
    },
    job_number: {
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
      rules: [{ required: true, message: "请输入密码", trigger: "blur" }],
    },
  };

  const onFinish = async (value) => {
    await fetchLogin(value);
    message.success("登录成功");
    goToAdmin();
  };

  return {
    formState,
    ruleState,
    onFinish,
  };
}
