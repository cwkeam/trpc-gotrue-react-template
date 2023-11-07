import { Navigate } from "react-router-dom";

import { useUser } from "@/hooks/user";

const IndexPage: React.FC = () => {
  const user = useUser();
  console.log("user", user);
  if (user) {
    return <Navigate to="/hello" replace />;
  }
  return <Navigate to="/sign-in" replace />;
};

export default IndexPage;
