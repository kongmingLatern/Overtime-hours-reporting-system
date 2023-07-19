import { fetchLogin } from "@/api";
import { useGoto } from "./../composables/useGoto";
import { message } from "ant-design-vue";
import { reactive } from "vue";
import { RouterName } from "@/router/RouterName";

export function useLogin() {
  const { goTo, goToAdmin } = useGoto();

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
    const { data } = await fetchLogin(value);
    localStorage.setItem("job_number", value.job_number);
    console.log("data", data);
    message.success("登录成功");
    if (data.user_type === 0) {
      goTo(RouterName.HOME);
    } else if (data.user_type === 1) {
      goTo(RouterName.RESPONSIVE);
    } else if (data.user_type === 2) {
      goToAdmin();
    } else {
      message.error("系统错误");
    }
  };

  return {
    formState,
    ruleState,
    onFinish,
  };
}
