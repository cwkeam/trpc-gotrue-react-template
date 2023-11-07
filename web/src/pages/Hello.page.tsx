import { Button, Text } from "@mantine/core";
import { useEffect } from "react";

import trpc from "@/core/trpc";
import { useUser } from "@/hooks/user";
import { authClient } from "@/providers/AuthProvider";

const HelloPage: React.FC = () => {
  const user = useUser();

  useEffect(() => {
    console.log(user?.email);
    console.log(user);
  }, []);
  // const user = useGuardedUser()
  const { data } = trpc.user.sampleRoute.useQuery({
    sample: "this is a sample text",
  });

  return (
    <div>
      <Text color="dimmed" weight="bold">
        Hello World!
      </Text>
      <Text>{data}</Text>

      <Button
        onClick={async () => await authClient.signOut()}
        fullWidth
        mt={24}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default HelloPage;
