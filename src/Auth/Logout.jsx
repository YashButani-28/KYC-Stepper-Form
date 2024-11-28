import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the auth token from localStorage
    localStorage.removeItem("authToken");

    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return (
    <div className="logout-page">
      <h1>Logging out...</h1>
    </div>
  );
}
