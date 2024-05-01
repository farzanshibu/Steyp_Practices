import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import ChatLayout from "../layouts/layout";

// config
import { PATH_DASHBOARD } from "../routes/path";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const ChatApp = Loadable(lazy(() => import("../pages/chat/ChatApp")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const CommingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatLayout />,
    children: [
      {
        path: PATH_DASHBOARD.general.app,
        element: <ChatApp />,
        index: true,
      },
      {
        path: PATH_DASHBOARD.general.commingsoon,
        element: <CommingSoon />,
      },
      { path: "*", element: <Page404 /> },
    ],
  },
  { path: "*", element: <Page404 /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
