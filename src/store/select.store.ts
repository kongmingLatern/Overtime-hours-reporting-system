import { ref } from "vue";
export const MenuLists = [
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
export const useSelectStore = () => {
  const selectedKeys = ref<string[]>([
    localStorage.getItem("selectedKeys") || MenuLists[0].key,
  ]);

  function handleClick(e) {
    selectedKeys.value = [e.key];
    localStorage.setItem("selectedKeys", selectedKeys.value[0]);
  }

  return {
    selectedKeys,
    handleClick,
  };
};
