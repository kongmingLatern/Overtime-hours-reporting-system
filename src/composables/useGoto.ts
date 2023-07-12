import { RouterName } from "@/router/RouterName";
import { useRouter } from "vue-router";

export const useGoto = () => {
  const router = useRouter();

  const goTo = (name: string) => {
    router.push({
      name,
    });
  };

  return {
    goTo,
    goToAdmin: () => goTo(RouterName.Admin),
  };
};
