import { defineComponent, onMounted, ref } from "vue";
import { useResponsiveTimeReport } from "@/store";
import ResponsiveTab from "@/components/responsive/ResponsiveTab.tsx";
import CustomTable from "@/components/common/CustomTable";
import ModalButton from "@/components/common/ModalButton";
import { ruleState as RuleState } from "./helpers";
import { addReports } from "@/api";

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
                    footer={null}
                    formState={record}
                    ruleState={ruleState}
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
