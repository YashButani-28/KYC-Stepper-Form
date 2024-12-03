import { useState } from "react";
import DetailTitle from "../DetailTitle";
import Input from "../formComponents/Input";
import SelectInput from "../formComponents/SelectInput";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from react-icons
import ButtonGroup from "./ButtonGroup";

export default function UserDetails() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full gap-2 ">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle title="Login Details" />
        </div>
        <div className="flex flex-col w-[80%] gap-4">
          <div className="flex w-full justify-between gap-[40px]">
            <SelectInput
              label="Terms"
              placeholder="Select Terms"
              important
              options={[
                // { value: "", label: "Select Terms" },
                { value: "Terms of Service", label: "Terms of Service" },
                { value: "Privacy Policy", label: "Privacy Policy" },
                {
                  value: "Acceptable Use Policy",
                  label: "Acceptable Use Policy",
                },
                {
                  value: "Non-Disclosure Agreement",
                  label: "Non-Disclosure Agreement",
                },
              ]}
              // {...register("role", { required: "Role is required" })}
              // onChange={(e) => {
              //   setValue("role", e.target.value); // Update the value in React Hook Form
              //   clearErrors("role"); // Clear error when value changes
              // }}
            />
            <SelectInput
              label="Role"
              placeholder="Select Role"
              important
              options={[
                // { value: "", label: "Select Role" },
                { value: "Admin", label: "Admin" },
                { value: "User", label: "User" },
                { value: "Manager", label: "Manager" },
                { value: "Guest", label: "Guest" },
                { value: "Moderator", label: "Moderator" },
              ]}
              // {...register("role", { required: "Role is required" })}
              // onChange={(e) => {
              //   setValue("role", e.target.value); // Update the value in React Hook Form
              //   clearErrors("role"); // Clear error when value changes
              // }}
            />
            <Input
              label="Username"
              name="username"
              important
              placeholder="Enter User Name"
            />
            <Input
              label="Email"
              type="email"
              name="email"
              important
              placeholder="Enter Email"
            />
          </div>
          <div className="flex w-full justify-between gap-[40px]">
            <div className="relative w-full">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                important
                placeholder="Enter Password"
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
            <div className="relative w-full">
              <Input
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                important
                placeholder="Enter Confirm Password"
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
            <Input
              label="Mobile No"
              name="category"
              placeholder="Enter Mobile No"
              type="number"
            />
            <SelectInput
              label="Location"
              placeholder="Select Location"
              options={[
                // { value: "", label: "Select Location " },
                { value: "Australia", label: "Australia" },
                { value: "Brazil", label: "Brazil" },
                { value: "Canada", label: "Canada" },
                { value: "United States", label: "United States" },
                { value: "China", label: "China" },
                { value: "Italy", label: "Italy" },
                { value: "Japan", label: "Japan" },
                { value: "Pakistan", label: "Pakistan" },
                { value: "Russia", label: "Russia" },
                { value: "South Africa", label: "South Africa" },
                { value: "United Kingdom", label: "United Kingdom" },
              ]}
              // {...register("role", { required: "Role is required" })}
              // onChange={(e) => {
              //   setValue("role", e.target.value); // Update the value in React Hook Form
              //   clearErrors("role"); // Clear error when value changes
              // }}
            />
          </div>
          <div className="flex gap-[10px] mt-2 w-full">
            <input type="checkbox" className="" />
            <div className="w-full flex ">
              <p className="font-semibold mr-2">Is Api User? </p>
              <span className="text-[#696774] text-[14px]">
                (Please check this box if you want to grant API access to the
                user.)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[99%] h-[2px] bg-[#D9D9D9]"></div>

      <div className="flex w-full gap-2 flex-wrap">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle
            title="Additional Discount Details"
            codeName="Kindly apply an additional discount specifically to the inventories at the designated location."
            className="text-[#696774]"
          />
        </div>
        <div className="flex w-[50%] justify-between gap-[40px]">
          <Input
            label="Mumbai"
            name="mumbaiPer"
            type="number"
            placeholder="Enter Percentage"
          />

          <Input
            label="Hong Kong"
            name="hongkongPer"
            type="number"
            placeholder="Enter Percentage"
          />
          <Input
            label="New York"
            name="newyorkPer"
            placeholder="Enter Percentage"
          />
          <Input
            label="Belgium"
            name="belgiumPer"
            placeholder="Enter Percentage"
          />
        </div>
      </div>
      <div className="flex justify-end gap-[20px]">
        <ButtonGroup />
      </div>
    </div>
  );
}
