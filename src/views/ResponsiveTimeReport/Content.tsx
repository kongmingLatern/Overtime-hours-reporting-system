import { defineComponent, onMounted, ref } from "vue";
import { useResponsiveTimeReport } from "@/store";
import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import { updateReject } from "@/api";
import { message } from "ant-design-vue";

export default defineComponent({
  setup() {
    const activeKey = ref<string>("pending");
    const { data, loading, columns, reportColumns, init, ruleState } =
      useResponsiveTimeReport();

    onMounted(async () => {
      await init();
    });

    const tabList = [
      {
        key: "pending",
        title: "待审批",
        content: () => (
          <CustomTable
            columns={columns}
            data={data.value.filter((i) => i.pending)}
            loading={loading.value}
            scroll={{ x: 900 }}
            v-slots={{
              operation: (record) => {
                return (
                  <ModalButton
                    wrap-class-name="full-modal"
                    buttonText="查看"
                    title="填报信息"
                    okText="确认"
                    cancelText="取消"
                    formState={record}
                    ruleState={ruleState}
                    v-slots={{
                      modalFooter: ({ visible, onOk }) => {
                        return (
                          <div class={"fixed bottom-2 left-0 w-full px-2"}>
                            <div class="flex justify-between">
                              <ModalButton
                                w="1/3"
                                buttonText="驳回"
                                buttonProps={{
                                  class: "w-full",
                                  danger: true,
                                }}
                                title="驳回原因"
                                formState={{ reason: "" }}
                                ruleState={{
                                  reason: {
                                    type: "text",
                                    label: "请填写驳回原因",
                                    rules: [
                                      {
                                        required: true,
                                        message: "原因不能为空",
                                      },
                                    ],
                                  },
                                }}
                                onOk={async (result) => {
                                  visible.value = false;
                                  await updateReject({
                                    ...record,
                                    reason: result.reason,
                                  });
                                  message.success("驳回成功");
                                  window.location.reload();
                                }}
                              />
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
                          </div>
                        );
                      },
                    }}
                    onOk={async (result) => {
                      await updateReject(result);
                      message.success("同意成功");
                      window.location.reload();
                    }}
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
        title: "已审批",
        content: () => (
          <CustomTable
            columns={reportColumns}
            data={data.value.filter((i) => !i.pending)}
            loading={loading.value}
            scroll={{ x: 800 }}
            pagination={{
              position: ["bottomCenter"],
            }}
          />
        ),
      },
    ];
    return () => (
      <>
        <ResponsiveTab
          activeKey={activeKey.value}
          tabList={tabList}
          justify-center
        />
      </>
    );
  },
});
