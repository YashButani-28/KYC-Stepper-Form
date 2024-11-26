import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Index from "./Auth/Registration.jsx";
import Login from "./Auth/Login.jsx";
import Registration from "./Auth/Registration.jsx";

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
    path: "/auth",
    element: <Index />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  // { path: "/", element: <Header /> },
  // {
  //   path: "/auth,",
  //   children: [
  //     { path: "login", element: <Login /> },
  //     { path: "registration", element: <Registration /> },
  //   ],
  // },
]);

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return <RouterProvider router={router} />;
}

export default App;
