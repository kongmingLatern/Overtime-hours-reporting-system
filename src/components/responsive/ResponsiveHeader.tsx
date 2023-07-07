import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup(props, { attrs }) {
    return () => {
      return (
        <h1
          class={"text-center h-[3rem] lh-[3rem] text-lg font-bold"}
          {...attrs}
        >
          {props.name}
        </h1>
      );
    };
  },
});
