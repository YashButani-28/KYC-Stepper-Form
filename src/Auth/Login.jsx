// import { useState } from "react";
// import Input from "../FormComponents/Input";
// import SelectInput from "../FormComponents/SelectInput";
// import AuthPageImage from "./AuthPageImage";
// import { Link } from "react-router-dom";
// import AuthButtons from "../FormComponents/AuthButtons";

// export default function Login() {
//   const [role, setRole] = useState("");

//   const roles = [
//     { value: "Admin", label: "Admin" },
//     { value: "User", label: "User" },
//   ];
//   return (
//     <>
//       <div className="Authentication-page flex w-full">
//         <AuthPageImage />

//         <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
//           <h1 className="text-3xl font-bold mb-6">Login</h1>
//           <form className="w-full max-w-sm space-y-4" action="/header">
//             <Input
//               label="Email"
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               required
//               important
//             />
//             {/* <SelectInput label="Role" required /> */}
//             <SelectInput
//               label="Choose Role"
//               options={roles}
//               value={role}
//               onChange={(e) => setData({ ...data, role: e.target.value })}
//               required
//               important
//             />
//             <Input
//               label="Password"
//               name="password"
//               type="password"
//               placeholder="Enter your Password"
//               required
//               important
//               autoComplete="new-password"
//             />
//             <AuthButtons>Login</AuthButtons>
//           </form>

//           <div className="mt-4">
//             <p className="text-sm text-gray-600">
//               Need an account?{" "}
//               <Link
//                 to="/registration"
//                 className="text-blue-500 hover:underline"
//               >
//                 Register here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
    role: "",
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

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user that matches the entered email and role
    const user = users.find(
      (user) => user.email === formData.email && user.role === formData.role
    );

    // Check if user exists and the password matches
    if (user) {
      if (user.password === formData.password) {
        // Successful login: navigate to the dashboard or home page
        navigate("/header"); // Replace with your destination route
      } else {
        // Incorrect password
        setError("Incorrect password. Please try again.");
      }
    } else {
      // No matching user found
      setError("No account found with this email and role. Please create one.");
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
              value={formData.role}
              onChange={handleRoleChange} // Correctly handling role change
              required
              important
              name="role" // Ensure the name attribute is set to "role"
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
