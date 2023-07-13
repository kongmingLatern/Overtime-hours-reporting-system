import { useGoto } from "./../composables/useGoto";
import { message } from "ant-design-vue";
import { reactive } from "vue";

export function useLogin() {
  const { goToAdmin } = useGoto();

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

  const onFinish = (value) => {
    // TODO: 登陆 接口 fetchLogin
    console.log("value", value);
    message.success("登录成功");
    goToAdmin();
  };

  return {
    formState,
    ruleState,
    onFinish,
  };
}
