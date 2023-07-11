import { defineComponent, defineEmits, ref } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    onFocus: {
      type: Function,
      default: () => {},
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  emits: ["update:value"],
  setup(props, { attrs, emit }) {
    const select = ref(null);
    const value = ref(props.value);

    const onChange = (targetValue) => {
      value.value = targetValue;
      emit("update:value", targetValue);
    };

    return () => (
      <aSelect
        ref={select.value}
        v-model:value={value.value}
        onFocus={props.onFocus}
        onChange={(targetValue) =>
          props.onChange(targetValue) || onChange(targetValue)
        }
        placeholder={props.placeholder}
        {...attrs}
      >
        {props.options &&
          props.options.map((option: any) => (
            <aSelectOption value={option.value} {...option.options}>
              {option.value}
            </aSelectOption>
          ))}
      </aSelect>
    );
  },
});
