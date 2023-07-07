import { defineComponent } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
      default: "",
    },
    sm: {
      type: Object,
      default: () => ({}),
    },
    md: {
      type: Object,
      default: () => ({}),
    },
    lg: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { attrs }) {
    return () => {
      return (
        <h1 text="center" lg={props.lg} sm={props.sm} md={props.md} {...attrs}>
          {props.name}
        </h1>
      );
    };
  },
});
