import { useState, useId } from "react";
import AuthPageImage from "./AuthPageImage";
import Input from "../FormComponents/Input";
import SelectInput from "../FormComponents/SelectInput";
import AuthButtons from "../FormComponents/AuthButtons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function Registration() {
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
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

  const userId = useId();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const storeDataInLocalStorage = (userData) => {
  //   const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  //   existingUsers.push(userData);
  //   localStorage.setItem("users", JSON.stringify(existingUsers));
  // };

  // to generate unique id for the register user
  const generateUniqueId = () => {
    let uniqueId;
    do {
      uniqueId = Math.floor(Math.random() * 1000000);
    } while (isIdExist(uniqueId));
    return uniqueId;
  };

  // to check unique id is exists or not
  const isIdExist = (id) => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    return existingUsers.some((user) => user.id === id);
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
      setError("All field are Required");
      return;
    }
    setError("");

    const userData = {
      id: generateUniqueId(), // unique id for the register user
      name: data.name,
      email: data.email,
      contact_no: data.contact_no,
      role: data.role,
      password: data.password,
    };

    try {
      // Send POST request to the JSON server to store user data
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user. Please try again.");
      }
      // storeDataInLocalStorage(userData);
      // console.log(userData);
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
              // {...register("name", { required: true })}
            />

            {error && <p>{error.message}</p>}
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={data.email}
              required
              important

              // {...register("email", { required: true })}
            />
            <Input
              label="Mobile Number"
              name="contact_no"
              type="number"
              onChange={handleChange}
              value={data.contact_no}
              placeholder="Enter your mobile number "
              required
              important
              // {...register("contact_no", { required: true })}
            />
            <SelectInput
              label="Choose Role"
              options={roles}
              value={data.role}
              onChange={(e) => setData({ ...data, role: e.target.value })}
              required
              important
              // {...register("role", { required: true })}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              required
              important
              autoComplete="new-password"
              // {...register("password", { required: true })}
            />
            {error && (
              <p className="text-red-500 text-[14px] text-center">
                Failed to register your account. Please try again.
              </p>
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
