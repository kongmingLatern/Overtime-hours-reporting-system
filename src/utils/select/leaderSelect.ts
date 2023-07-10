import { ref } from "vue";
import { fuzzyQueryByKey } from "@/utils";

export const leaderSelect = async (hook) => {
  const { data, init } = hook();

  await init();

  const leaderList = ref(
    data.value.map((item) => {
      return {
        value: item.leader,
      };
    })
  );
  return {
    label: "部长",
    value: leaderList.value[0].value,
    options: leaderList.value,
    placeholder: "请选择部长名字",
    onChange: async (e: any) => {
      await fuzzyQueryByKey(hook, "leader", e);
    },
  };
};
