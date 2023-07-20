import { useLogin } from "@/store";
import { getJobName } from "@/utils";
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
interface DataType {
  icon: string;
  text: string;
  onClick?: () => void;
}
export default defineComponent({
  name: "MyContent",
  setup() {
    const { exit } = useLogin();
    const data: DataType[] = [
      {
        icon: "mdi:account",
        text: "我的信息",
      },
      {
        icon: "mdi:message",
        text: "我的填报信息",
      },
      {
        icon: "mdi:check",
        text: "已通过的填报信息",
      },
      {
        icon: "mdi:close",
        text: "驳回的填报信息",
      },
      {
        icon: "mdi:logout",
        text: "退出登陆",
        onClick: exit,
      },
    ];

    return () => (
      <>
        <header class={"flex j-a-c"}>
          <aSpace direction="vertical" class="j-a-c">
            <aAvatar size={90}>
              <Icon icon={"mdi:account"} width="90" />
            </aAvatar>
            <span class={"text-[1.5rem]"}>{getJobName()}</span>
          </aSpace>
        </header>

        <main>
          <aList
            bordered
            dataSource={data}
            class={"mt-4"}
            v-slots={{
              renderItem: ({ item }) => {
                return (
                  <aListItem
                    class={
                      "lh-[60px] text-[18px] active:bg-[#f4f4f4] transition"
                    }
                    onClick={() => item.onClick?.()}
                  >
                    <div class={"flex items-center"}>
                      <Icon icon={item.icon} width="25" />
                      <span class={"ml-2"}>{item.text}</span>
                    </div>
                    <Icon icon={"mdi:arrow-right"} width="20" color="ccc" />
                  </aListItem>
                );
              },
            }}
          />
        </main>
      </>
    );
  },
});
