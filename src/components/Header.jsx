import logo from "../assets/icons/logo.svg";
import bankAccountLogo from "../assets/icons/bankAccountLogo.svg";
import profilePhoto from "../assets/Images/profilePhoto.jpg";
import { Link } from "react-router-dom";
// import Navigation from "./Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkUserExistence } from "../utils/checkUserExistence"; // Import utility function

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const { username, role } = location.state || {};

  const [showDropDown, setShowDropDown] = useState(false);
  // console.log(username, role);

  const handleMouseEnter = () => {
    setShowDropDown(true);
  };

  // Function to hide the dropdown when the mouse leaves
  const handleMouseLeave = () => {
    setShowDropDown(false);
  };

  useEffect(() => {
    const checkAndLogout = async () => {
      // Check if the token exists in localStorage
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        // If the token doesn't exist, remove any user state and redirect to login
        localStorage.removeItem("authToken");
        navigate("/login");
        window.location.reload(); // Refresh the page to re-evaluate the condition
        return;
      }

      // If username exists, check if the user still exists
      if (username) {
        const isUserExist = await checkUserExistence(username);
        if (!isUserExist) {
          localStorage.removeItem("authToken");
          navigate("/login");
          window.location.reload(); // Refresh the page to re-evaluate the condition
        }
      }
    };

    checkAndLogout();
  }, [username, navigate]);
  return (
    <>
      <header className="p-[16px] items-center">
        <div className="flex justify-between mb-4">
          <div className="logo-section flex gap-[16px]">
            <div className="main-logo ">
              <Link to="/layout">
                <img src={logo} alt="logo image" className="size-[36px]" />
              </Link>
            </div>
            <div className="border-[1px]"></div>
          </div>

          <div className="flex gap-8 items-center">
            <div
              className="account-details flex gap-1 cursor-pointer relative h-full items-center"
              // onClick={handleDropDownTogle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={bankAccountLogo}
                alt="Bank icon logo"
                className="size-[20px]"
              />
              <span to="/" className="text-primary text-[14px]">
                Account
              </span>
              {showDropDown && (
                <div className="dropdown-container absolute  top-[30px] right-[-10px] mt-2 p-2 border bg-white shadow-lg rounded min-w-[80px]">
                  <Link
                    to="/logout"
                    className="text-primary text-[14px] flex justify-center  hover:underline"
                    handleMouseEnter
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
            <div className="profile flex gap-2 min-w-[150px] justify-center items-center">
              <img
                src={profilePhoto}
                alt="User profile picture"
                className="rounded-full border-2 border-primary size-[40px] "
              />
              <div className="flex flex-col ">
                <h1 className="text-[14px] font-medium ">{username || ""}</h1>
                <h1 className="text-[12px] ">{role}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-300"></div>

        <div className="header-Information flex justify-between mt-4">
          <div className="flex flex-col">
            <h1 className="font-medium text-[20px]">KYC</h1>
            <p className="text-[10px] text-gray-400">Add New KYC</p>
          </div>
          <div>
            <h1 className="font-medium text-[20px]">
              SARVADHI SOLUTION PVT.LTD.
            </h1>
          </div>
        </div>
      </header>
      {/* <Navigation /> */}
      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
}
