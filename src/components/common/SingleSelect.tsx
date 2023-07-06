import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    value: {
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
  setup(props) {
    const select = ref(null);
    console.log("props", props.value);

    return () => (
      <aSelect
        ref={select.value}
        v-model:value={props.value}
        style={{ width: "120px" }}
        onFocus={props.onFocus}
        onChange={(targetValue) => props.onChange(targetValue)}
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
