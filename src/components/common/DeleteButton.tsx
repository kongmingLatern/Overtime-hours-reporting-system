import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: "Are you sure delete this task?",
    },
    okText: {
      type: String,
      default: "Yes",
    },
    cancelText: {
      type: String,
      default: "No",
    },
    onConfirm: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    value: {
      type: String,
      default: "删除",
    },
  },
  setup(props, { attrs, slots }) {
    return () => (
      <aPopconfirm
        title={props.title}
        ok-text={props.okText}
        cancel-text={props.cancelText}
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
        {...attrs}
      >
        {slots.default ? (
          slots.default()
        ) : (
          <a-button type="link">{props.value}</a-button>
        )}
      </aPopconfirm>
    );
  },
});
