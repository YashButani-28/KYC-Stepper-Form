import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/Header";
import Login from "./Auth/Login.jsx";
import Registration from "./Auth/Registration.jsx";
import Logout from "./Auth/logout.jsx";
import BasicDetails from "./components/forms/BasicDetails.jsx";
import Layout from "./components/Layout.jsx";
import TermsDetails from "./components/forms/TermsDetails.jsx";
import UserDetails from "./components/forms/UserDetails.jsx";
import AddressDetails from "./components/forms/AddressDetails.jsx";

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
    path: "/layout",
    element: <Layout />,
    children: [
      {
        path: "basic-details",
        element: <BasicDetails />,
      },
      {
        path: "terms-datails",
        element: <TermsDetails />,
      },
      {
        path: "user-details",
        element: <UserDetails />,
      },
      {
        path: "address-details",
        element: <AddressDetails />,
      },
    ],
  },
]);

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  return <RouterProvider router={router} />;
}

export default App;
