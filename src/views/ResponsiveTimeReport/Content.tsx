import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeKey = ref<string>("pending");
    const tabList = [
      {
        key: "pending",
        title: "待填报",
        icon: "iconfont icon-daishenhe",
        content: <div>123</div>,
      },
      {
        key: "reported",
        title: "已填报",
        icon: "iconfont icon-yitijiao",
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
