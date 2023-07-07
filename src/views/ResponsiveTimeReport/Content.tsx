import { defineComponent, ref } from "vue";
import { columnsData, data, ruleState } from "@/store";
import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";

export default defineComponent({
  setup() {
    const activeKey = ref<string>("pending");
    const tabList = [
      {
        key: "pending",
        title: "待填报",
        content: (
          <CustomTable
            columns={columnsData}
            data={data}
            scroll={{ x: 700 }}
            v-slots={{
              operation: (record) => {
                return (
                  <ModalButton
                    buttonText="查看"
                    title="填报信息"
                    okText="确认"
                    cancelText="取消"
                    formState={record}
                    ruleState={ruleState}
                    v-slots={{
                      modalFooter: ({ visible, onOk }) => {
                        return (
                          <div class="flex justify-between">
                            <aButton
                              onClick={() => (visible.value = false)}
                              bg="red-600"
                              color="white"
                              w="1/3"
                            >
                              驳回
                            </aButton>
                            <aButton
                              bg="green-600"
                              color="white"
                              htmlType="submit"
                              w="1/3"
                              onClick={onOk}
                            >
                              同意
                            </aButton>
                          </div>
                        );
                      },
                    }}
                    wrap-class-name="full-modal"
                  />
                );
              },
            }}
            pagination={{
              position: ["bottomCenter"],
            }}
          />
        ),
      },
      {
        key: "reported",
        title: "已填报",
        content: "已填报",
      },
    ];
    return () => (
      <ResponsiveTab
        activeKey={activeKey.value}
        tabList={tabList}
        justify-center
      />
    );
  },
});
