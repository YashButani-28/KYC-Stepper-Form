import { useState } from "react";
import Input from "../FormComponents/Input";
import SelectInput from "../FormComponents/SelectInput";
import AuthPageImage from "./AuthPageImage";
import { Link, useNavigate } from "react-router-dom";
import AuthButtons from "../FormComponents/AuthButtons";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "", // Default role selected
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const roles = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
  ];

  // Unified handler for form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      role: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch user data from db.json
      const response = await fetch("http://localhost:3000/users"); // Adjust the URL as needed
      if (!response.ok) {
        throw new Error("Failed to fetch users. Please try again later.");
      }

      const users = await response.json();
      console.log("Fetched users:", users); // Debugging log

      // Find user that matches the entered email and role
      const user = users.find(
        (user) => user.email === formData.email && user.role === formData.role
      );

      if (user) {
        console.log("User found:", user); // Debugging log

        // Check if the password matches
        if (user.password === formData.password) {
          const token = `token-${new Date().getTime()}`;
          localStorage.setItem("authToken", token);

          console.log("Login successful for user:", user);
          console.log("Login successful for user:", user); // Debugging log
          navigate("/header"); // Navigate to the desired page
        } else {
          console.log("Incorrect password for user:", user.email); // Debugging log
          setError("Incorrect password. Please try again.");
        }
      } else {
        console.log("No user found matching the provided email and role."); // Debugging log
        setError(
          "No account found with this email and role. Please create one."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <>
      <div className="Authentication-page flex w-full">
        <AuthPageImage />

        <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              important
              value={formData.email}
              onChange={handleChange}
            />
            <SelectInput
              label="Choose Role"
              options={roles}
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
              required
              important
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              required
              important
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
            />
            {error && (
              <p className="text-red-500 text-[14px] text-center">{error}</p>
            )}
            <AuthButtons>Login</AuthButtons>
          </form>

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Need an account?{" "}
              <Link
                to="/registration"
                className="text-blue-500 hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
