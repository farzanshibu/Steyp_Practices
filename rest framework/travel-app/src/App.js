import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import NotFound from "./components/screens/NotFound";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Places />,
  },
  {
    path: "/auth/login/",
    element: <Login />,
  },
  {
    path: "/auth/create/",
    element: <Signup />,
  },
  {
    path: "/place/:id",
    element: <Place />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App(props) {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
