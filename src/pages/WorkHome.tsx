import { defineComponent } from "vue";
import ModalButtonTSX from "@/components/ModalButton";

const formState = {
  name: "",
  age: "",
  address: "",
};

const ruleState = {
  name: {
    type: "text",
    label: "Name",
    rules: [
      {
        required: false,
        message: "Please input your name",
      },
    ],
  },
  age: {
    type: "number",
    label: "Age",
    rules: [
      {
        required: true,
        message: "Please input your age",
      },
    ],
  },
  address: {
    type: "text",
    label: "Address",
    rules: [
      {
        required: true,
        message: "Please input your address",
      },
    ],
  },
};

export default defineComponent({
  setup() {
    return () => (
      <ModalButtonTSX
        formState={formState}
        ruleState={ruleState}
        title="TestDemo"
        buttonText={"button"}
        cancelText="cancel"
        okText="ok"
      />
    );
  },
});
