import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./forms/Navigation";

export default function Layout() {
  return (
    <div className="layout-container flex flex-col h-screen">
      <Header />
      <Navigation />
      <div className="p-8 w-full">
        <Outlet />
      </div>
    </div>
  );
}
