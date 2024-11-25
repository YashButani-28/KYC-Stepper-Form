import Input from "../FormComponents/Input";
import SelectInput from "../FormComponents/selectInput";
import AuthPageImage from "./AuthPageImage";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <>
      <div className="Authentication-page flex w-full">
        <AuthPageImage />

        <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <form className="w-full max-w-sm space-y-4" action="/header">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <SelectInput label="Role" required />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your Password"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
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
