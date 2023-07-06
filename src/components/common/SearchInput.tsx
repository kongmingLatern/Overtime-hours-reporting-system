import { defineComponent, ref, PropType } from "vue";

interface FunctionType {
  (func: string): void;
}

export default defineComponent({
  props: {
    value: {
      type: String,
      value: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    onSearch: {
      type: Function as PropType<FunctionType>,
      default: () => {},
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    const value = ref<string>(props.value || "");

    // eslint-disable-next-line vue/no-setup-props-destructure
    const { onSearch } = props;

    const onSearchInput = (searchValue: string) => {
      return onSearch(searchValue);
    };
    return () => (
      <aInputSearch
        v-model:value={value.value}
        placeholder={props.placeholder}
        onSearch={() => onSearchInput(value.value)}
        {...attrs}
      />
    );
  },
});
