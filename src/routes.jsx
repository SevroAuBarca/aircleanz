import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { Layout as MapLayout } from "./components/map/Layout";
import Container from "./pages/Container";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "register", element: <SignUp /> },
    ],
  },
  {
    path: "map",
    element: <MapLayout />,
    children: [{ path: "", element: <Container /> }],
  },
]);

export default routes;
