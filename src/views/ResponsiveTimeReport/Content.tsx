import { defineComponent, ref } from "vue";
import { columnsData, data, ruleState, reportColumnsData } from "@/store";
import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";

export default defineComponent({
  setup() {
    const activeKey = ref<string>("pending");
    const tabList = [
      {
        key: "pending",
        title: "待审批",
        content: (
          <CustomTable
            columns={columnsData}
            data={data}
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
                                onOk={(result) => {
                                  visible.value = false;
                                  // NOTE: 表单结果
                                  console.log(result);
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
        content: (
          <CustomTable
            columns={reportColumnsData}
            data={data}
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
            project: "123",
            over_time_reason: "",
          }}
          ruleState={{
            job_name: {
              type: "text",
              label: "员工姓名",
            },
            job_number: {
              type: "number",
              label: "工号",
            },
            over_time: {
              type: "date",
              label: "加班时间",
            },
            project: {
              type: "select",
              label: "所属项目",
              options: {
                options: [
                  {
                    value: "1号部门",
                    options: {
                      disabled: true,
                    },
                  },
                  {
                    value: "2号部门",
                    options: {
                      disabled: true,
                    },
                  },
                  {
                    value: "3号部门",
                    options: {
                      disabled: false,
                    },
                  },
                ],
                onChange: (e) => {
                  console.log("e", e);
                },
              },
            },
            over_time_reason: {
              type: "text",
              label: "加班事由",
            },
          }}
          v-slots={{
            modalFooter: ({ onOk }) => <aButton onClick={onOk}>提交</aButton>,
          }}
        />
      </>
    );
  },
});
