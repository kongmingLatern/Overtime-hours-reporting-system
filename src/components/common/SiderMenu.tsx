import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import { useGoto } from "@/composables";
import { MenuLists, useSelectStore } from "@/store";

export default defineComponent({
  setup() {
    const { goTo } = useGoto();
    const { selectedKeys, handleClick } = useSelectStore();

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
