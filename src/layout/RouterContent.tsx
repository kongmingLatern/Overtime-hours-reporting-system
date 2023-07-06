import { defineComponent } from "vue";

export default defineComponent({
  setup(_, { slots }) {
    const Slot = {
      header: slots?.header,
      content: slots?.content,
      footer: slots?.footer,
    };
    return () => (
      <>
        <aLayoutHeader bg="#f0f2f5" p="0">
          {Slot.header && Slot.header()}
        </aLayoutHeader>
        <aLayoutContent bg="#f0f2f5" p="0">
          {Slot.content && Slot.content()}
        </aLayoutContent>
        <aLayoutFooter bg="#f0f2f5" p="0">
          {Slot.footer && Slot.footer()}
        </aLayoutFooter>
      </>
    );
  },
});
