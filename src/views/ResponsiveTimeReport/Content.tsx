import { defineComponent, onMounted, ref } from "vue";
import { useResponsiveTimeReport } from "@/store";
import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import { ruleState as RuleState } from "./helpers";
import { addReports, updateReject } from "@/api";

export default defineComponent({
  setup() {
    const activeKey = ref<string>("pending");
    const {
      data,
      loading,
      columns,
      reportColumns,
      getAllPendingPersonList,
      ruleState,
    } = useResponsiveTimeReport();

    onMounted(async () => {
      await getAllPendingPersonList();
      console.log("data", data);
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
            scroll={{ x: 700 }}
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
                                  console.log({
                                    ...record,
                                    reason: result.reason,
                                  });
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
                      // NOTE: 同意 pending 赋值为 0 即可
                      await updateReject(result);
                      console.log("同意", result);
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
            scroll={{ x: 700 }}
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
        <ModalButton
          wrap-class-name="full-modal"
          title="填报信息"
          containProps={{
            class: "fixed bottom-[50px] right-2 ",
          }}
          buttonProps={{
            class: "rounded-full w-[45px] h-[45px]",
          }}
          buttonText="+"
          formState={{
            job_name: "",
            job_number: "",
            over_time: "",
            project_name: "",
            over_time_reason: "",
          }}
          ruleState={RuleState}
          v-slots={{
            modalFooter: ({ onOk }) => <aButton onClick={onOk}>提交</aButton>,
          }}
          onOk={async (result) => {
            await addReports(result);
          }}
        />
      </>
    );
  },
});
