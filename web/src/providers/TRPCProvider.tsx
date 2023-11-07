import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { PropsWithChildren } from "react";

import trpc from "@/core/trpc";
import useSingleton from "@/hooks/singleton";
import { authClient } from "@/providers/AuthProvider";

const TRPCProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const queryClient = useSingleton(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            useErrorBoundary: false,
          },
          queries: {
            suspense: true,
            useErrorBoundary: true,
          },
        },
      })
  );

  const trpcClient = useSingleton(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: import.meta.env.VITE_TRPC_BASE_URL,
          fetch,
          headers: async () => {
            try {
              const {
                data: { session },
              } = await authClient.getSession();
              return session?.access_token
                ? {
                    Authorization: `Bearer ${session.access_token}`,
                  }
                : {};
            } catch (error) {
              console.log("error", error);
              return {};
            }
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default TRPCProvider;
