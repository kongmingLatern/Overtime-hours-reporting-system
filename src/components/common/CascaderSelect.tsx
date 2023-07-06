import { PropType, defineComponent, ref } from "vue";
import type { CascaderProps } from "ant-design-vue";
export default defineComponent({
  props: {
    value: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array as PropType<CascaderProps["options"]>,
      default: () => {},
    },
    onChange: {
      type: Function as PropType<(value: string[]) => void>,
      default: () => {},
    },
  },
  setup(props, { attrs }) {
    const value = ref<string[]>(props.value || []);
    const onChange = (value: string[]) => {
      props.onChange && props.onChange(value);
    };
    return () => (
      <aCascader
        v-model:value={value.value}
        options={props.options}
        placeholder={props.placeholder}
        onChange={onChange}
        {...attrs}
      />
    );
  },
});
