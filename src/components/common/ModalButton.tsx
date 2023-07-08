import { PropType, defineComponent, reactive, ref, toRaw } from "vue";
import DynamicForm from "./DynamicForm";
import type { FormInstance } from "ant-design-vue";

export default defineComponent({
  props: {
    type: {
      type: String as PropType<"primary" | "dashed" | "link" | "text">,
      default: "primary",
    },
    containProps: {
      type: Object,
      default: () => {},
    },
    buttonText: {
      type: String,
      default: "编辑",
    },
    buttonProps: {
      type: Object,
      default: () => {},
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
    onOk: {
      type: Function as PropType<(value: Record<string, any>) => void>,
      default: () => {},
    },
    onFail: {
      type: Function as PropType<(info: any) => void>,
      default: () => {},
    },
  },
  setup(props, { slots, attrs }) {
    const formRef = ref<FormInstance>();
    const visible = ref(false);
    const formState = reactive(props?.formState || {});
    const ruleState = reactive(props?.ruleState || {});

    // NOTE: 以下属性无需具备响应式
    // eslint-disable-next-line vue/no-setup-props-destructure
    const {
      buttonText = "编辑",
      title = "模态窗口标题",
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
            props.onOk(toRaw(formState));
            visible.value = false;
            formRef.value && formRef.value.resetFields();
            console.log("reset formState: ", toRaw(formState));
          })
          .catch((info) => {
            props.onFail(info);
            console.log("Validate Failed:", info);
          });
      }
    };

    const handleSlots = {
      footer: () => {
        return (
          <slot name="modalFooter">
            {(slots.modalFooter && slots.modalFooter({ visible, onOk })) || (
              <>
                <aButton onClick={() => (visible.value = false)}>
                  {cancelText}
                </aButton>
                <aButton type="primary" onClick={onOk}>
                  {okText}
                </aButton>
              </>
            )}
          </slot>
        );
      },
    };

    return () => (
      <div {...props.containProps}>
        <aButton
          type={props.type || "primary"}
          onClick={() => (visible.value = true)}
          {...props.buttonProps}
        >
          {buttonText}
        </aButton>
        <aModal
          v-model:visible={visible.value}
          title={title}
          okText={okText}
          cancelText={cancelText}
          onOk={onOk}
          v-slots={handleSlots}
          {...attrs}
        >
          <DynamicForm
            formRef={formRef}
            formState={formState}
            ruleState={ruleState}
          />
        </aModal>
      </div>
    );
  },
});
