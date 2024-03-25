import "./App.css";
import Header from "./components/Header";
import DetailsCard from "./components/DetailsCard";
import ListCards from "./components/ListCards";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListCards />,
  },
  {
    path: "/place/:id",
    element: <DetailsCard />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
