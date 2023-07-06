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
          style={
            {
              // position: "fixed",
              // top: 0,
              // left: 0,
              // height: "100vh",
            }
          }
          breakpoint="lg"
          collapsed-width={0}
          sm="w-[100px] bg-blue-300"
          lg="w-[200px] bg-red-400"
        >
          <SiderMenu />
        </aLayoutSider>
        {/* <aLayout style={{ marginLeft: "200px" }}> */}
        <aLayout>
          <RouterView />
        </aLayout>
      </aLayout>
    );
  },
});
