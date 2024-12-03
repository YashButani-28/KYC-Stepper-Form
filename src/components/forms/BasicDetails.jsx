import { useState } from "react";
import DetailTitle from "../DetailTitle";
import Input from "../formComponents/Input";
import SelectInput from "../formComponents/SelectInput";
import ButtonGroup from "./ButtonGroup";
export default function BasicDetails() {
  const [category, setCategory] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [country, setCountry] = useState("");
  const [salesPerson, setSalesPerson] = useState("");
  const [assistantSalesPerson, setAssistantSalesPerson] = useState("");
  const [department, setDepartment] = useState("");

  const businessTypeOptions = {
    Proprietor: [
      "Service Sector",
      "Trading",
      "Manufacturing",
      "E-commerce",
      "Agriculture",
    ],
    Partnership: [
      "Service Sector",
      "Trading",
      "Manufacturing",
      "E-commerce",
      "Agriculture",
    ],
    LLP: ["Service Sector", "Trading", "Manufacturing", "E-commerce"],
    Private_Limited: [
      "Service Sector",
      "Trading",
      "Manufacturing",
      "E-commerce",
      "Agriculture",
    ],
    Public_Limited: [
      "Service Sector",
      "Trading",
      "Manufacturing",
      "E-commerce",
      "Agriculture",
    ],
    Others: ["Others"],
  };

  const mobileCodes = {
    India: "+91",
    Australia: "+61",
    Brazil: "+55",
    "United States": "+1",
    China: "+86",
    Italy: "+39",
    Japan: "+81",
    Pakistan: "+92",
    Russia: "+7",
    "South Africa": "+27",
    "United Kingdom": "+44",
  };

  const assistantSalesOptions = {
    "Sales Executive": [
      "Sales Support Associate",
      "Junior Sales Representative",
    ],
    "Sales Representative": ["Sales Coordinator", "Sales Assistant"],
    "Account Executive": ["Sales Trainee", "Sales Support Associate"],
    "Sales Consultant": ["Junior Sales Representative", "Sales Coordinator"],
    "Field Sales Representative": ["Sales Assistant", "Sales Trainee"],
  };

  // Department options based on selected Sales Person
  const departmentOptions = {
    "Sales Executive": ["Sales Department", "Sales Support Department"],
    "Sales Representative": ["Sales Marketing Department", "Sales Department"],
    "Account Executive": [
      "Sales Marketing Department",
      "Sales Support Department",
    ],
    "Sales Consultant": ["Sales Department", "Sales Marketing Department"],
    "Field Sales Representative": [
      "Sales Support Department",
      "Sales Department",
    ],
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-full gap-2 flex-wrap">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle
            title="Categoty Details"
            codeName="Party Code"
            code="P123456"
          />
        </div>
        <div className="flex w-[80%] justify-between gap-[40px]">
          <SelectInput
            label="Category"
            placeholder="Select Category"
            important
            options={[
              // { value: "", label: "Select Category" },
              { value: "Proprietor", label: "Proprietor" },
              { value: "Partnership", label: "Partnership" },
              { value: "LLP", label: "LLP" },
              { value: "Private Limited", label: "Private Limited" },
              { value: "Public Limited", label: "Public Limited" },
              { value: "Others", label: "Others" },
            ]}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setBusinessType(""); // Reset Business Type when Category changes
            }}
            // {...register("role", { required: "Role is required" })}
            // onChange={(e) => {
            //   setValue("role", e.target.value); // Update the value in React Hook Form
            //   clearErrors("role"); // Clear error when value changes
            // }}
          />

          <Input
            label="Company/Individual"
            name="category"
            important
            placeholder="Enter Name"
          />
          {/* <SelectInput
            label="Business Type"
            options={[
              { value: "", label: "Select Business Type" },
              { value: "Service Sector", label: "Service Sector" },
              { value: "Trading", label: "Trading" },
              { value: "Manufacturing", label: "Manufacturing" },
              { value: "E-commerce", label: "E-commerce" },
              { value: "Agriculture", label: "Agriculture" },
              { value: "Others", label: "Others" },
            ]}
            // {...register("role", { required: "Role is required" })}
            // onChange={(e) => {
            //   setValue("role", e.target.value); // Update the value in React Hook Form
            //   clearErrors("role"); // Clear error when value changes
            // }}
            
          /> */}

          <SelectInput
            label="Business Type"
            placeholder="Select Business Type"
            options={[
              // { value: "", label: "Select Business Type" },
              ...(businessTypeOptions[category] || []).map((type) => ({
                value: type,
                label: type,
              })),
            ]}
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
          <Input label="GST No" name="gstNo" placeholder="Enter GST No" />
        </div>
      </div>
      <div className="w-[99%] h-[2px]  bg-[#D9D9D9]"></div>
      {/* -------------------------------------------------------------------------------  */}
      <div className="flex w-full gap-2 ">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle title="Contact Details" />
        </div>
        <div className="flex flex-col w-[80%] gap-4">
          <div className="flex w-full justify-between gap-[40px]">
            <Input
              label="Primary Contact"
              name="primaryContact"
              type="tel"
              placeholder="Type Primary Contact"
            />
            <Input
              label="Primary Email"
              type="email"
              name="primaryEmail"
              important
              placeholder="Enter Primary Email"
            />
            <Input
              label="Secondary Email"
              type="email"
              name="secondaryEmail"
              placeholder="Enter Secondary Email"
            />
            <Input
              label="Birth Date"
              type="date"
              name="dob"
              placeholder="Select Date"
            />
          </div>
          <div className="flex w-full justify-between gap-[40px]">
            <SelectInput
              placeholder="Select Country"
              label="Country"
              important
              options={[
                // { value: "", label: "Select Country" },
                { value: "Australia", label: "Australia" },
                { value: "Brazil", label: "Brazil" },
                { value: "India", label: "India" },
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
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              // {...register("role", { required: "Role is required" })}
              // onChange={(e) => {
              //   setValue("role", e.target.value); // Update the value in React Hook Form
              //   clearErrors("role"); // Clear error when value changes
              // }}
            />
            <div className="relative w-full">
              <Input
                label="Mobile No."
                name="mobileNo"
                type="tel"
                className="pl-[95px]"
                placeholder="Enter Mobile No."
              />
              <div className="absolute w-22 top-[29px] left-1">
                <SelectInput
                  // placeholder="Code"
                  className="border-none"
                  options={[
                    { value: "", label: "Code" },
                    {
                      value: mobileCodes[country] || "",
                      label: mobileCodes[country] || "",
                    },
                  ]}
                  value={mobileCodes[country] || ""}
                  readOnly
                />
              </div>
            </div>
            <div className="w-full flex gap-4 items-end">
              <div className="w-1/4">
                <Input label="Phone No." name="cc" placeholder="CC" />
              </div>
              <div className="w-1/4">
                <Input name="ndc" placeholder="NDC" className="1/4" />
              </div>
              <div className="w-1/2">
                <Input
                  name="sn"
                  placeholder="1234 567 7890"
                  className="w-1/2"
                />
              </div>
            </div>
            <div className="w-full flex gap-4 items-end">
              <div className="w-1/4">
                <Input label="Fax No." name="cc" placeholder="CC" />
              </div>
              <div className="w-1/4">
                <Input
                  label="  "
                  name="ndc"
                  placeholder="NDC"
                  className="1/4"
                />
              </div>
              <div className="w-1/2">
                <Input
                  label="   "
                  name="sn"
                  placeholder="1234 567 7890"
                  className="w-1/2"
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="w-[99%] h-[2px]  bg-[#D9D9D9]"></div>
      {/* ------------------------------------------------------------------------- */}

      <div className="flex w-full gap-2 ">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle title="Other Details" />
        </div>
        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex w-full justify-between gap-[20px]">
            <SelectInput
              placeholder="Select Employee"
              label="Sales Person/Employee"
              options={[
                { value: "", label: "Select Employee" },
                { value: "Sales Executive", label: "Sales Executive" },
                {
                  value: "Sales Representative",
                  label: "Sales Representative",
                },
                { value: "Account Executive", label: "Account Executive" },
                { value: "Sales Consultant", label: "Sales Consultant" },
                {
                  value: "Field Sales Representative",
                  label: "Field Sales Representative",
                },
              ]}
              onChange={(e) => {
                setSalesPerson(e.target.value);
                setAssistantSalesPerson(""); // Reset Assistant Sales Person when Sales Person changes
                setDepartment(""); // Reset Department when Sales Person changes
              }}
              // {...register("role", { required: "Role is required" })}
              // onChange={(e) => {
              //   setValue("role", e.target.value); // Update the value in React Hook Form
              //   clearErrors("role"); // Clear error when value changes
              // }}
            />
            <SelectInput
              label="Assistant Sales Person"
              placeholder="Select Assistant Sales Person"
              options={[
                // { value: "", label: "Select Assistant Sales Person" },
                ...(assistantSalesOptions[salesPerson] || []).map((option) => ({
                  value: option,
                  label: option,
                })),
              ]}
              value={assistantSalesPerson}
              onChange={(e) => setAssistantSalesPerson(e.target.value)}
            />
            <div className="w-full">
              <label
                htmlFor="Remark"
                className="text-gray-700 text-sm font-bold mb-2 ml-[5px]"
              >
                Remark
              </label>
              <textarea
                name="remark"
                className="w-full px-[12px] py-[8px] border border-[#69677480] placeholder-[#696774] rounded-[6px] h-[42px] mt-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Remarks"
              ></textarea>
            </div>
            <Input
              label="Registration Date"
              type="date"
              name="regDate"
              placeholder="Select Date"
            />
          </div>
          <div className="flex flex-col justify-between gap-[20px] w-1/2">
            <SelectInput
              label="Department"
              placeholder="Select Department"
              options={[
                { value: "", label: "Select Department" },
                ...(departmentOptions[salesPerson] || []).map((option) => ({
                  value: option,
                  label: option,
                })),
              ]}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <div className="flex gap-[10px] w-full">
              <input type="checkbox" className="" />
              <div className="w-full flex ">
                <p className="font-semibold mr-2">Active </p>
                <span className="text-[#696774]">
                  (Please check the box if the user should be marked as Active.)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-[20px]">
        <ButtonGroup />
      </div>
    </div>
  );
}
