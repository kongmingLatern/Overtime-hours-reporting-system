import { FormInstance } from "ant-design-vue";
import { PropType, Ref, defineComponent, reactive, ref } from "vue";
import SingleSelect from "./SingleSelect";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { handleOverTime } from "@/utils";
dayjs.extend(relativeTime);

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
    onFinish: {
      type: Function as PropType<(values: any) => void>,
      default: () => {},
    },
  },

  setup(props, { slots, attrs }) {
    const formRef = ref<FormInstance>();
    const formState = reactive(props?.formState || {});
    const ruleState = reactive(props?.ruleState || {});

    const getInputByType = (
      type: InputType,
      key: keyof typeof formState,
      options?
    ) => {
      switch (type) {
        case "number":
          return <aInputNumber v-model:value={formState[key]} {...options} />;
        case "date":
          return (
            <aDatePicker
              v-model:value={formState[key]}
              show-time
              format="YYYY-MM-DD HH:mm:ss"
              value-format="YYYY-MM-DD HH:mm:ss"
              {...options}
            />
          );
        case "text":
          return <aInput v-model:value={formState[key]} {...options} />;
        case "select":
          return <SingleSelect v-model:value={formState[key]} {...options} />;
        case "readonly": {
          if (key === "over_time") {
            const overTime = handleOverTime(formState);
            formState[key] = overTime;
            return (
              <aTypographyParagraph>
                <blockquote>{overTime}</blockquote>
              </aTypographyParagraph>
            );
          } else {
            return (
              <aTypographyParagraph>
                <blockquote>{formState[key]}</blockquote>
              </aTypographyParagraph>
            );
          }
        }
        case "password":
          return <aInputPassword v-model:value={formState[key]} {...options} />;
        case "cascader":
          return <aCascader v-model:value={formState[key]} {...options} />;
        default:
          return <aInput v-model:value={formState[key]} {...options} />;
      }
    };

    const onFinish = (values: any) => {
      if (props.onFinish) {
        props.onFinish(values);
      }
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
        {...attrs}
      >
        {Object.keys(ruleState).map((key) => {
          const item = ruleState[key];
          return (
            <aFormItem name={key} label={item.label} rules={item.rules}>
              {getInputByType(item.type as InputType, key, item?.options)}
            </aFormItem>
          );
        })}
        <aFormItem>{slots?.submit && slots.submit()}</aFormItem>
      </aForm>
    );
  },
});
