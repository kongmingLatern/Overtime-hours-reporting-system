import { Icon } from "@iconify/vue";
import { defineComponent, ref } from "vue";
import { useGoto } from "@/composables";

export default defineComponent({
  setup() {
    const { goTo } = useGoto();
    const selectedKeys = ref<string[]>(["1"]);
    const MenuLists = [
      {
        key: "1",
        icon: "ic:round-person",
        text: "加班人员列表",
        name: "overWorkPersonList",
      },
      {
        key: "2",
        icon: "solar:list-broken",
        text: "人员查询",
        name: "personSearch",
      },
      {
        key: "3",
        icon: "mingcute:department-fill",
        text: "部门查询",
        name: "departmentSearch",
      },
      {
        key: "4",
        icon: "ant-design:project-outlined",
        text: "项目维护",
        name: "projectMaintain",
      },
      {
        key: "5",
        icon: "lucide:sheet",
        text: "生成报表",
        name: "generateReports",
      },
    ];

    return () => (
      <>
        <aCarousel autoplay={true} dots={false} p="5">
          <div class="text-center bg-[#001529] p-2">
            <h3 color="white">1</h3>
          </div>
          <div class="text-center bg-[#001529] p-2">
            <h3 color="white">2</h3>
          </div>
          <div class="text-center bg-[#001529] p-2">
            <h3 color="white">3</h3>
          </div>
          <div class="text-center bg-[#001529] p-2">
            <h3 color="white">4</h3>
          </div>
        </aCarousel>
        <aMenu
          v-model:selectedKeys={selectedKeys.value}
          theme="dark"
          mode="inline"
          h="inherit"
        >
          {MenuLists.map((item) => (
            <aMenuItem key={item.key} onClick={() => goTo(item.name)}>
              <aSpace>
                <Icon icon={item.icon} width={20} class={"flex"} />
                <span>{item.text}</span>
              </aSpace>
            </aMenuItem>
          ))}
        </aMenu>
      </>
    );
  },
});
