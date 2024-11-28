import { useState } from "react";
import AuthPageImage from "./AuthPageImage";
import Input from "../FormComponents/Input";
import SelectInput from "../FormComponents/SelectInput";
import AuthButtons from "../FormComponents/AuthButtons";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons

export default function Registration() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    contact_no: "",
    role: "",
    password: "",
  });

  const roles = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateUniqueId = async () => {
    let uniqueId;
    try {
      // Fetch existing users to ensure the ID is unique
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users. Please try again.");
      }

      const existingUsers = await response.json();
      do {
        uniqueId = Math.floor(Math.random() * 1000000);
      } while (existingUsers.some((user) => user.id === uniqueId));
    } catch (error) {
      console.error("Error generating unique ID:", error);
    }
    return uniqueId;
  };

  const handlechangeSubmit = async (e) => {
    e.preventDefault();

    if (
      !data.name ||
      !data.email ||
      !data.contact_no ||
      !data.role ||
      !data.password
    ) {
      setError("All fields are required.");
      return;
    }
    setError("");

    try {
      // Fetch existing users from db.json
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users. Please try again.");
      }

      const existingUsers = await response.json();

      // Check if the email already exists and for what role
      const existingUserWithEmail = existingUsers.find(
        (user) => user.email === data.email
      );

      if (existingUserWithEmail) {
        if (existingUserWithEmail.role === data.role) {
          setError("An account with this email and role already exists.");
          return;
        }
        if (existingUserWithEmail.role === "Admin" && data.role === "Admin") {
          setError(
            "This email is already registered as an Admin. It can only be registered as a User."
          );
          return;
        }
        if (existingUserWithEmail.role === "Admin" && data.role === "User") {
          setError(
            "This email is already registered as an Admin. You can only register it as a User."
          );
          return;
        }
      }

      const newUserId = await generateUniqueId();
      const userData = {
        id: newUserId, // Unique ID for the register user
        name: data.name,
        email: data.email,
        contact_no: data.contact_no,
        role: data.role,
        password: data.password,
      };

      // Send POST request to save user data
      const postResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!postResponse.ok) {
        throw new Error("Failed to register user. Please try again.");
      }

      setData({
        id: "",
        name: "",
        email: "",
        contact_no: "",
        role: "",
        password: "", // Resetting password and email along with other fields
      });
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to register user. Please try again.");
    }
  };

  return (
    <>
      <div className="Authentication-page flex w-full">
        <AuthPageImage />

        <div className="w-3/5 flex flex-col justify-center items-center bg-white px-10">
          <h1 className="text-3xl font-bold mb-6">Register</h1>
          <form
            className="w-full max-w-sm space-y-4"
            onSubmit={handlechangeSubmit}
          >
            <Input
              label="Name"
              name="name"
              placeholder="Enter your name"
              important
              onChange={handleChange}
              required
              value={data.name}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={data.email}
              required
              important
            />
            <Input
              label="Mobile Number"
              name="contact_no"
              type="number"
              onChange={handleChange}
              value={data.contact_no}
              placeholder="Enter your mobile number"
              required
              important
            />
            <SelectInput
              label="Choose Role"
              options={roles}
              value={data.role}
              onChange={(e) => setData({ ...data, role: e.target.value })}
              required
              important
            />
            <div className="relative">
              <Input
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"} // Toggle between text and password
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                required
                important
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute top-[40px] right-[15px] text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-[14px] text-center">{error}</p>
            )}
            <AuthButtons>Register</AuthButtons>
          </form>

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
