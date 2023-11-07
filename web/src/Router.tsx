import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignUpPage from "./pages/SignUp.page";

// import RouteErrorBoundary from "@/components/RouteErrorBoundary";
import RootLayout from "@/layouts/Root.layout";
// import ConfirmPage from "@/pages/Confirm.page";
import HelloPage from "@/pages/Hello.page";
import IndexPage from "@/pages/Index.page";
import SignInPage from "@/pages/SignIn.page";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <RouteErrorBoundary />,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/hello",
        element: <HelloPage />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

const Router: React.FC = () => <RouterProvider router={router} />;

export default Router;
