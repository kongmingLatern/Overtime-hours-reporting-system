import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    activeKey: {
      type: String,
      default: "",
    },
    tabList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { attrs }) {
    const activeKey = ref<string>(props.activeKey);
    return () => (
      <aTabs v-model:activeKey={activeKey.value} centered {...attrs}>
        {props.tabList.map((item: any) => (
          <aTabPane key={item.key} tab={item.title} {...item.options}>
            {item.content}
          </aTabPane>
        ))}
      </aTabs>
    );
  },
});
