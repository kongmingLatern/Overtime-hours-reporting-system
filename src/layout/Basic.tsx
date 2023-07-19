import SiderMenu from "@/components/common/SiderMenu";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup() {
    return () => (
      <aLayout>
        <aLayoutSider
          collapsible
          bg="#f0f2f5"
          breakpoint="lg"
          collapsed-width={0}
          z={100}
        >
          <SiderMenu />
        </aLayoutSider>
        <aLayout>
          <RouterView />
        </aLayout>
      </aLayout>
    );
  },
});
