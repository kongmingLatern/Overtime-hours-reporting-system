import { defineComponent, reactive, ref, toRaw } from "vue";
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
    console.log("props", props);
    const formRef = ref<FormInstance>();
    const visible = ref(false);
    const form = reactive(props?.formState || {});
    const formState = form.state || {};
    console.log(formState);

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
            {Object.keys(formState).map((key) => {
              console.log("key", key, formState);
              const item = formState[key];
              return (
                <aFormItem name={key} label={item.label} rules={item.rules}>
                  <aInput v-model:value={item.value} />
                </aFormItem>
              );
            })}
          </aForm>
        </aModal>
      </div>
    );
  },
});
