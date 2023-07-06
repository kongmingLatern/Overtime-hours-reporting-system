import { FormInstance } from "ant-design-vue";
import { PropType, Ref, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  props: {
    formRef: {
      type: Object as PropType<Ref<FormInstance | undefined> | undefined>,
      default: undefined,
    },
    formState: {
      type: Object,
      default: () => ({}),
    },
    ruleState: {
      type: Object as PropType<Record<string, Partial<RuleState>>>,
      default: () => ({}),
    },
  },

  setup(props, { slots }) {
    const formRef = ref<FormInstance>();
    const formState = reactive(props?.formState || {});
    const ruleState = reactive(props?.ruleState || {});

    const getInputByType = (type: InputType, key: keyof typeof formState) => {
      switch (type) {
        case "number":
          return <aInputNumber v-model:value={formState[key]} />;
        case "date":
          return <aDatePicker v-model:value={formState[key]} show-time />;
        case "text":
          return <aInput v-model:value={formState[key]} />;
        default:
          return <aInput v-model:value={formState[key]} />;
      }
    };

    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };

    return () => (
      <aForm
        ref={props.formRef ?? formRef.value}
        model={formState}
        layout="vertical"
        onFinish={(targetValue) => !props.formRef && onFinish(targetValue)}
        onFinishFailed={(errorInfo) =>
          !props.formRef && onFinishFailed(errorInfo)
        }
      >
        {Object.keys(ruleState).map((key) => {
          const item = ruleState[key];
          return (
            <aFormItem name={key} label={item.label} rules={item.rules}>
              {getInputByType(item.type as InputType, key)}
            </aFormItem>
          );
        })}
        <aFormItem>{slots?.submit && slots.submit()}</aFormItem>
      </aForm>
    );
  },
});
