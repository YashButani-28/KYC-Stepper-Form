import Input from "../FormComponents/Input";
import SelectInput from "../FormComponents/selectInput";
import AuthPageImage from "./AuthPageImage";

export default function Registration() {
  return (
    <>
      <div className="Authentication-page flex w-full">
        <AuthPageImage />

        <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
          <h1 className="text-3xl font-bold mb-6">Register</h1>
          <form className="w-full max-w-sm space-y-4">
            <Input label="Name" placeholder="Enter your name" required />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <Input
              label="Mobile Number"
              type="number"
              placeholder="Enter your mobile number "
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
              Register
            </button>
          </form>

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
