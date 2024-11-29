import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <div className="Nav-bar bg-secondery w-full h-[40px]">
        <ul className="flex gap-4 text-[12px]  px-6 h-full items-center">
          <NavLink
            to="/basic-details"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary flex items-center h-full"
                : undefined
            }
          >
            <li className="">Basic Details</li>
          </NavLink>
          <NavLink
            to="/terms-details"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary flex items-center h-full"
                : undefined
            }
          >
            <li className="">Terms Details</li>
          </NavLink>
          <NavLink
            to="/user-details"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary flex items-center h-full"
                : undefined
            }
          >
            <li className="">User Details</li>
          </NavLink>
          <NavLink
            to="/address-details"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-primary flex items-center h-full"
                : undefined
            }
          >
            <li className="">Address Details</li>
          </NavLink>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
