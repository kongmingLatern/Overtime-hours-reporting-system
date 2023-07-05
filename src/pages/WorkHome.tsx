import { defineComponent } from "vue";
import ModalButtonTSX from "@/components/ModalButton";

const formState = {
  state: {
    name: "",
    age: "",
    address: "",
  },
  name: {
    name: "name",
    type: "text",
    label: "Name",
    value: "",
    rules: [
      {
        required: true,
        message: "Please input your name",
      },
    ],
  },
  age: {
    name: "age",
    type: "number",
    label: "Age",
    value: "",
    rules: [
      {
        required: true,
        message: "Please input your age",
      },
    ],
  },
  address: {
    name: "address",
    type: "text",
    label: "Address",
    value: "",
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
        title="TestDemo"
        buttonText={"button"}
        cancelText="cancel"
        okText="ok"
      />
    );
  },
});
