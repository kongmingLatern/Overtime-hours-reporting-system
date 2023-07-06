import { defineComponent } from "vue";

export default defineComponent({
  setup(_, { slots }) {
    const Slot = {
      header: slots?.header,
      content: slots?.content,
      footer: slots?.footer,
      sider: slots?.sider,
    };
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
          {Slot.sider && Slot.sider()}
        </aLayoutSider>
        <aLayout style={{ marginLeft: "200px" }}>
          <a-layout-header bg="#f0f2f5" p="0">
            {Slot.header && Slot.header()}
          </a-layout-header>
          <a-layout-content bg="#f0f2f5" p="0">
            {Slot.content && Slot.content()}
          </a-layout-content>
          <a-layout-footer bg="#f0f2f5" p="0">
            {Slot.footer && Slot.footer()}
          </a-layout-footer>
        </aLayout>
      </aLayout>
    );
  },
});
