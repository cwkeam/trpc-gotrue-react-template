import { GoTrueClient } from "@supabase/gotrue-js";
import React, { PropsWithChildren, useEffect } from "react";

import { useInvalidateUser } from "@/hooks/user";

type Props = {};

export const authClient = new GoTrueClient({
  url: import.meta.env.VITE_GOTRUE_BASE_URL,
  fetch: fetch,
  autoRefreshToken: true,
  persistSession: true,
  storageKey: "metabuddy.auth.token",
  storage: {
    getItem: async (key: string) => {
      const value = await localStorage.getItem(key);
      return value;
    },
    removeItem: async (key: string) => {
      if (await localStorage.getItem(key)) {
        return localStorage.removeItem(key);
      }
    },
    setItem: async (key: string, value: string) => {
      await localStorage.setItem(key, value);
    },
  },
});

const AuthProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const invalidateUser = useInvalidateUser();

  useEffect(() => {
    const {
      data: { subscription },
    } = authClient.onAuthStateChange(async (event, session) => {
      if (
        ["SIGNED_IN", "TOKEN_REFRESHED", "USER_UPDATED"].includes(event) &&
        session?.user.id
      ) {
      }
      await invalidateUser();
    });
    return () => subscription.unsubscribe();
  }, []);

  return <>{children}</>;
};
export default AuthProvider;
