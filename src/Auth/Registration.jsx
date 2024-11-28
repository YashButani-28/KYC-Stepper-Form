import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthPageImage from "./AuthPageImage";
import Input from "../FormComponents/Input";
import SelectInput from "../FormComponents/SelectInput";
import AuthButtons from "../FormComponents/AuthButtons";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Registration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState(""); // To handle server errors

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
      role: "", // Default role value for the select input
    },
  });

  // Watch field values
  const selectedRole = watch("role");

  // Generate Unique ID
  const generateUniqueId = async () => {
    let uniqueId;
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) throw new Error("Failed to fetch users.");
      const existingUsers = await response.json();
      do {
        uniqueId = Math.floor(Math.random() * 1000000);
      } while (existingUsers.some((user) => user.id === uniqueId));
    } catch (error) {
      console.error("Error generating unique ID:", error);
    }
    return uniqueId;
  };

  // On form submission
  const onSubmit = async (data) => {
    setServerError(""); // Reset server error
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) throw new Error("Failed to fetch users.");
      const existingUsers = await response.json();

      const existingUserWithEmail = existingUsers.find(
        (user) => user.email === data.email
      );

      if (existingUserWithEmail && existingUserWithEmail.role === data.role) {
        setServerError("An account with this email and role already exists.");
        return;
      }

      const newUserId = await generateUniqueId();
      const userData = {
        ...data,
        id: newUserId, // Assign unique ID
      };

      const postResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!postResponse.ok) throw new Error("Failed to register user.");

      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      setServerError("Failed to register user. Please try again.");
    }
  };

  return (
    <div className="Authentication-page flex w-full">
      <AuthPageImage />
      <div className="w-3/5 flex flex-col justify-center items-center bg-white px-10">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
        <form
          className="w-full max-w-sm space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name Field */}
          <div>
            <Input
              label="Name"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm ml-[10px]">
                {errors.name.message}
              </p>
            )}
          </div>

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

          {/* Mobile Number Field */}
          <div>
            <Input
              label="Mobile Number"
              name="contact_no"
              type="number"
              placeholder="Enter your mobile number"
              {...register("contact_no", {
                required: "Mobile number is required",
                minLength: {
                  value: 10,
                  message: "Mobile number must be at least 10 digits",
                },
                maxLength: {
                  value: 12,
                  message: "Mobile number must be at most 12   digits",
                },
              })}
            />
            {errors.contact_no && (
              <p className="text-red-500 text-sm ml-[10px]">
                {errors.contact_no.message}
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
              {...register("role", {
                required: "Role is required",
              })}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
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
  );
}
