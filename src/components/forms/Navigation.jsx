import { NavLink } from "react-router-dom";

export default function Navigation({ stepCompleted }) {
  return (
    <>
      <div className="Nav-bar bg-secondery w-full h-[40px]">
        <ul className="flex gap-4 text-[14px]  px-6 h-full items-center">
          <NavLink
            to="basic-details"
            className={({ isActive }) =>
              stepCompleted[0]
                ? isActive
                  ? "border-b-2 border-primary flex items-center h-full"
                  : undefined
                : "pointer-events-none text-gray-500"
            }
          >
            <li className="">Basic Details</li>
          </NavLink>

          <NavLink
            to="terms-datails"
            className={({ isActive }) =>
              stepCompleted[1]
                ? isActive
                  ? "border-b-2 border-primary flex items-center h-full"
                  : undefined
                : "pointer-events-none text-gray-500"
            }
          >
            <li className="">Terms Details</li>
          </NavLink>
          <NavLink
            to="user-details"
            className={({ isActive }) =>
              stepCompleted[2]
                ? isActive
                  ? "border-b-2 border-primary flex items-center h-full"
                  : undefined
                : "pointer-events-none text-gray-500"
            }
          >
            <li className="">User Details</li>
          </NavLink>
          <NavLink
            to="address-details"
            className={({ isActive }) =>
              stepCompleted[3]
                ? isActive
                  ? "border-b-2 border-primary flex items-center h-full"
                  : undefined
                : "pointer-events-none text-gray-500"
            }
          >
            <li className="">Address Details</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}
