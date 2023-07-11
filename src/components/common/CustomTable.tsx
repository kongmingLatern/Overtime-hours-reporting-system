import { defineComponent } from "vue";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { handleOverTime } from "@/utils";
dayjs.extend(relativeTime);

function filterTime(key) {
  return key !== "over_time";
}

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
  setup(props, { slots, attrs }) {
    const handleSlot = {
      //  对应 operation 的单元格 插槽内容
      bodyCell: ({ record, text, column }) => {
        if (column.key === "status") {
          switch (text) {
            case "已通过":
              return <aTag color="green">{text}</aTag>;
            case "已提交":
              return <aTag color="blue">{text}</aTag>;
            case "已驳回":
              return <aTag color="red">{text}</aTag>;
          }
        }

        if (column.key === "operation") {
          return (
            <slot name="operation">
              {(slots.operation && slots.operation(record)) || (
                <aButton>删除</aButton>
              )}
            </slot>
          );
        }

        if (!filterTime(column.key)) {
          // 根据加班开始和结束时间算出加班时长
          const overTime = handleOverTime(record);
          return <span>{overTime}</span>;
        }

        // 正则匹配字符串中的 time 字段
        if (filterTime(column.key) && /time$/.test(column.key)) {
          return <span>{dayjs(text).format("YYYY-MM-DD HH:mm:ss")}</span>;
        }

        return text;
      },
    };
    return () => (
      <aTable
        columns={props.columns}
        dataSource={props.data}
        v-slots={handleSlot}
        {...attrs}
      />
    );
  },
});
