import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Login from "./Auth/Login.jsx";
import Registration from "./Auth/Registration.jsx";
import Logout from "./Auth/logout.jsx";
import BasicDetails from "./components/BasicDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/header",
    element: <Header />,
  },
]);

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  return <RouterProvider router={router} />;
}

export default App;
