import { PropType, defineComponent, reactive, ref, toRaw } from "vue";
import type { FormInstance } from "ant-design-vue";

export default defineComponent({
  props: {
    buttonText: {
      type: String,
      default: "编辑",
    },
    formState: {
      type: Object,
      default: () => ({}),
    },
    ruleState: {
      type: Object as PropType<Record<string, Partial<RuleState>>>,
      default: () => ({}),
    },
    title: {
      type: String,
      default: "Create a new collection",
    },
    okText: {
      type: String,
      default: "创建",
    },
    cancelText: {
      type: String,
      default: "取消",
    },
  },
  setup(props) {
    const formRef = ref<FormInstance>();
    const visible = ref(false);
    const formState = reactive(props?.formState || {});
    const ruleState = reactive(props?.ruleState || {});

    // NOTE: 以下属性无需具备响应式
    // eslint-disable-next-line vue/no-setup-props-destructure
    const {
      buttonText = "编辑",
      title = "Create a new collection",
      okText = "创建",
      cancelText = "取消",
    } = props;

    const onOk = () => {
      if (formRef.value) {
        formRef.value
          .validateFields()
          .then((values) => {
            console.log("Received values of form: ", values);
            console.log("formState: ", toRaw(formState));
            visible.value = false;
            formRef.value && formRef.value.resetFields();
            console.log("reset formState: ", toRaw(formState));
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }
    };

    const getInputByType = (type: InputType, key: keyof typeof formState) => {
      return type === "number" ? (
        <aInputNumber v-model:value={formState[key]} />
      ) : (
        <aInput v-model:value={formState[key]} />
      );
    };

    return () => (
      <div>
        <aButton type="primary" onClick={() => (visible.value = true)}>
          {buttonText}
        </aButton>
        <aModal
          v-model:visible={visible.value}
          title={title}
          okText={okText}
          cancelText={cancelText}
          onOk={onOk}
        >
          <aForm ref={formRef} model={formState} layout="vertical">
            {Object.keys(ruleState).map((key) => {
              const item = ruleState[key];
              return (
                <aFormItem name={key} label={item.label} rules={item.rules}>
                  {getInputByType(item.type as InputType, key)}
                </aFormItem>
              );
            })}
          </aForm>
        </aModal>
      </div>
    );
  },
});
