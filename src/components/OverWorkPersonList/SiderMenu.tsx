import { Icon } from "@iconify/vue";
import { defineComponent, ref } from "vue";
import router from "@/router";

export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>(["1"]);
    const MenuLists = [
      {
        key: "1",
        icon: "ic:round-person",
        text: "加班人员列表",
        link: "/admin/overWorkPersonList",
      },
      {
        key: "2",
        icon: "solar:list-broken",
        text: "人员查询",
        link: "/admin/personSearch",
      },
      {
        key: "3",
        icon: "mingcute:department-fill",
        text: "部门查询",
        link: "/admin/departmentSearch",
      },
      {
        key: "4",
        icon: "ant-design:project-outlined",
        text: "项目维护",
        link: "/admin/projectMaintain",
      },
      {
        key: "5",
        icon: "lucide:sheet",
        text: "生成报表",
        link: "/admin/generateReports",
      },
    ];

    return () => (
      <aMenu
        v-model:selectedKeys={selectedKeys.value}
        theme="dark"
        mode="inline"
        h="100vh"
        onSelect={(item) => {
          selectedKeys.value = item.selectedKeys;
        }}
      >
        {MenuLists.map((item) => (
          <aMenuItem key={item.key} onClick={() => router.push(item.link)}>
            <aSpace>
              <Icon icon={item.icon} width={20} class={"flex"} />
              <span>{item.text}</span>
            </aSpace>
          </aMenuItem>
        ))}
      </aMenu>
    );
  },
});
