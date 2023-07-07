import { defineComponent, ref } from "vue";
import { columnsData, data } from "@/store";
import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import CustomTable from "@/components/common/CustomTable";

export default defineComponent({
  setup() {
    const activeKey = ref<string>("pending");
    const tabList = [
      {
        key: "pending",
        title: "待填报",
        content: <CustomTable columns={columnsData} data={data} />,
      },
      {
        key: "reported",
        title: "已填报",
        content: "已填报",
      },
    ];
    return () => (
      <ResponsiveTab
        activeKey={activeKey.value}
        tabList={tabList}
        justify-center
      />
    );
  },
});
