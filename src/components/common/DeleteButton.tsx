import { PropType, defineComponent } from "vue";

interface FunctionType {
  (record: Record<string, any>): void;
}

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "你确定要删除吗?",
    },
    okText: {
      type: String,
      default: "是",
    },
    cancelText: {
      type: String,
      default: "否",
    },
    onConfirm: {
      type: Function as PropType<FunctionType>,
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
    buttonProps: {
      type: Object,
      default: () => {},
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
          <a-button {...props.buttonProps}>{props.value}</a-button>
        )}
      </aPopconfirm>
    );
  },
});
