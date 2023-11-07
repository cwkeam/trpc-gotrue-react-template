import { useQuery, useQueryClient } from "@tanstack/react-query";

import trpc from "@/core/trpc";
import { authClient } from "@/providers/AuthProvider";

export function useInvalidateUser() {
  const queryClient = useQueryClient();
  const tprcQc = trpc.useContext();
  return async () => {
    queryClient.invalidateQueries({
      queryKey: ["gotrue", "user"],
    });
    // tprcQc.user.userOnboardInfo.invalidate();
  };
}

export function useUser() {
  const { data: user } = useQuery(["gotrue", "user"], {
    queryFn: async () => {
      const {
        data: { user },
        error,
      } = await authClient.getUser();
      if (error || !user) return null;
      return user;
    },
    suspense: true,
    refetchOnMount: "always",
    refetchOnReconnect: "always",
  });
  return user;
}
