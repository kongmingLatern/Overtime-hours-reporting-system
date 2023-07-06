import { defineComponent } from "vue";

export default defineComponent({
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { slots }) {
    const handleSlot = {
      //  对应 operation 的单元格 插槽内容
      bodyCell: ({ text, column }) => {
        if (column.key === "operation") {
          return (
            <slot name="operation">
              {(slots.operation && slots.operation()) || (
                <aButton>删除</aButton>
              )}
            </slot>
          );
        }
        return text;
      },
    };
    return () => (
      <aTable
        columns={props.columns}
        dataSource={props.data}
        v-slots={handleSlot}
      />
    );
  },
});
