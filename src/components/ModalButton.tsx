import { defineComponent, reactive, ref, toRaw } from "vue";
import type { FormInstance } from "ant-design-vue";
interface Values {
  title: string;
  description: string;
  modifier: string;
}

export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const visible = ref(false);
    const formState = reactive<Values>({
      title: "",
      description: "",
      modifier: "public",
    });

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
          New Collection
        </aButton>
        <aModal
          v-model:visible={visible.value}
          title={"Create a new collection"}
          okText="Create"
          cancelText="Cancel"
          onOk={onOk}
        >
          <aForm
            ref={formRef}
            model={formState}
            layout="vertical"
            name="form_in_modal"
          >
            <aFormItem
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: "Please input the title of collection!",
                },
              ]}
            >
              <aInput v-model:value={formState.title} />
            </aFormItem>
            <aFormItem name="description" label="Description">
              <a-textarea v-model:value={formState.description} />
            </aFormItem>
          </aForm>
        </aModal>
      </div>
    );
  },
});
