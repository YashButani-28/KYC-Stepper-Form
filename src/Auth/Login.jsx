import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./AuthComponents/Input";
import SelectInput from "./AuthComponents/SelectInput";
import AuthPageImage from "./AuthPageImage";
import { Link, useNavigate } from "react-router-dom";
import AuthButtons from "./AuthComponents/AuthButtons";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  // Watch field values
  // const selectedRole = watch("role");

  // Handle form submission
  const onSubmit = async (data) => {
    setServerError(""); // Reset server error
    try {
      const response = await axios.get("http://localhost:3000/users"); // Adjust the URL as needed

      const users = await response.data;

      const user = users.find(
        (user) => user.email === data.email && user.role === data.role
      );

      if (user) {
        if (user.password === data.password) {
          const token = `token-${new Date().getTime()}`;
          localStorage.setItem("authToken", token);

          navigate("/layout", {
            state: { username: user.name, role: user.role, usersId: user.id },
          });
        } else {
          setServerError("Incorrect password. Please try again.");
        }
      } else {
        setServerError(
          "No account found with this email and role. Please create one."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setServerError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="Authentication-page flex w-full">
      <AuthPageImage />

      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <form
          className="w-full max-w-sm space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email Field */}
          <div>
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email should like this, john.xyz@example",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm ml-[10px]">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Role Field */}
          <div>
            <SelectInput
              label="Choose Role"
              options={[
                { value: "", label: "Select Role" },
                { value: "Admin", label: "Admin" },
                { value: "User", label: "User" },
              ]}
              {...register("role", { required: "Role is required" })}
              onChange={(e) => {
                setValue("role", e.target.value); // Update the value in React Hook Form
                clearErrors("role"); // Clear error when value changes
              }}
            />
            {errors.role && (
              <p className="text-red-500 text-sm ml-[10px]">
                {errors.role.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your Password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long.",
                },
              })}
            />
            <button
              type="button"
              className="absolute top-[40px] right-[15px] text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm ml-[10px]">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Server Error */}
          {serverError && (
            <p className="text-red-500 text-sm text-center">{serverError}</p>
          )}

          <AuthButtons>Login</AuthButtons>
        </form>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Need an account?{" "}
            <Link to="/registration" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
