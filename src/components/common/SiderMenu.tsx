import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import { useGoto } from "@/composables";
import { MenuLists, useLogin, useSelectStore } from "@/store";

export default defineComponent({
  setup() {
    const { goTo } = useGoto();
    const { selectedKeys, handleClick } = useSelectStore();
    const { exit } = useLogin();

    return () => (
      <>
        <div class="flex justify-around bg-#001529 pb-2">
          <div>
            <aAvatar
              v-slots={{
                icon: () => <Icon icon="mdi:account" class="w-full h-full" />,
              }}
            />
            <span class="text-white pl-2">
              {localStorage.getItem("job_name") || "User"}
            </span>
          </div>

          <div>
            <aButton onClick={exit} ghost>
              退出登陆
            </aButton>
          </div>
        </div>
        <aMenu
          v-model:selectedKeys={selectedKeys.value}
          theme="dark"
          mode="inline"
          h="inherit"
          onClick={(e) => handleClick(e)}
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
