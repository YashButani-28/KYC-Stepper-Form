import DetailTitle from "../DetailTitle";
import Input from "../formComponents/Input";
import SelectInput from "../formComponents/SelectInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import ButtonGroup from "../formComponents/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "../../redux/slices/forms";

export default function UserDetails() {
  const dispatch = useDispatch();

  const [submitAction, setSubmitAction] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      terms: "",
      role: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNo: "",
      location: "",
      mumbaiPer: "",
      hongkongPer: "",
      newyorkPer: "",
      belgiumPer: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    if (submitAction === "save") {
      dispatch(saveFormData({ formId: 3, data }));

      console.log("Save data:", data);
      // Add your save logic here
    } else if (submitAction === "saveAndNext") {
      dispatch(saveFormData({ formId: 3, data }));

      console.log("Save and Next data:", data);
      // Add your save logic here
      navigate("/layout/address-details");
    }
  };
  const handleSave = () => {
    setSubmitAction("save");
  };

  const handleSaveAndNext = () => {
    setSubmitAction("saveAndNext");
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex w-full gap-2 ">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle title="Login Details" />
        </div>
        <div className="flex flex-col w-[80%] gap-4">
          <div className="flex w-full justify-between gap-[40px]">
            <div className="flex flex-col w-full">
              <SelectInput
                label="Terms"
                placeholder="Select Terms"
                {...register("terms", { required: "Terms is required" })}
                important
                options={[
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
                onChange={(e) => {
                  setValue("terms", e.target.value);
                  clearErrors("terms");
                }}
              />
              {errors.terms && (
                <p className="text-red-500 text-sm ml-[10px] mt-1">
                  {errors.terms.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <SelectInput
                label="Role"
                placeholder="Select Role"
                {...register("role", { required: "Role is required" })}
                important
                options={[
                  { value: "Admin", label: "Admin" },
                  { value: "User", label: "User" },
                  { value: "Manager", label: "Manager" },
                  { value: "Guest", label: "Guest" },
                  { value: "Moderator", label: "Moderator" },
                ]}
                onChange={(e) => {
                  setValue("role", e.target.value);
                  clearErrors("role");
                }}
              />
              {errors.role && (
                <p className="text-red-500 text-sm ml-[10px] mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <Input
                label="Username"
                name="username"
                {...register("username", { required: "Username is required" })}
                important
                placeholder="Enter User Name"
              />
              {errors.username && (
                <p className="text-red-500 text-sm ml-[10px] mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <Input
                label="Email"
                type="email"
                {...register("email", { required: "Email is required" })}
                name="email"
                important
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm ml-[10px] mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex w-full justify-between gap-[40px]">
            <div className="relative w-full">
              <Input
                label="Password"
                {...register("password", { required: "Password is required" })}
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
              {errors.password && (
                <p className="text-red-500 text-sm ml-[10px] mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="relative w-full">
              <Input
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password || "Passwords must be match",
                })}
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
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm ml-[10px] mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Input
              label="Mobile No"
              name="mobileNo"
              {...register("mobileNo")}
              placeholder="Enter Mobile No"
              type="number"
            />
            <SelectInput
              label="Location"
              placeholder="Select Location"
              options={[
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
              onChange={(e) => {
                setValue("location", e.target.value);
              }}
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
            {...register("mumbaiPer")}
            type="number"
            placeholder="Enter Percentage"
          />

          <Input
            label="Hong Kong"
            name="hongkongPer"
            {...register("hongkongPer")}
            type="number"
            placeholder="Enter Percentage"
          />
          <Input
            label="New York"
            name="newyorkPer"
            {...register("newyorkPer")}
            placeholder="Enter Percentage"
          />
          <Input
            label="Belgium"
            name="belgiumPer"
            {...register("belgiumPer")}
            placeholder="Enter Percentage"
          />
        </div>
      </div>
      <div className="flex justify-end gap-[20px]">
        <ButtonGroup
          previousPath="terms-datails"
          ResetButton={reset}
          onSave={handleSave}
          onSaveAndNext={handleSaveAndNext}
        />
      </div>
    </form>
  );
}
