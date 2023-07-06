import SiderMenu from "@/components/common/SiderMenu";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup() {
    return () => (
      <aLayout>
        <aLayoutSider
          bg="#f0f2f5"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
          }}
        >
          <SiderMenu />
        </aLayoutSider>
        <aLayout style={{ marginLeft: "200px" }}>
          <RouterView />
        </aLayout>
      </aLayout>
    );
  },
});
