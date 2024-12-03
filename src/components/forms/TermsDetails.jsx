import { useState } from "react";
import DetailTitle from "../DetailTitle";
import Input from "../formComponents/Input";
import SelectInput from "../formComponents/SelectInput";
import ButtonGroup from "./ButtonGroup";
export default function TermsDetails() {
  const [aadatParty, setAadatParty] = useState("");
  const [brokerOptions, setBrokerOptions] = useState([]);

  const brokerDependencies = {
    Buyer: [
      { value: "Real Estate Broker", label: "Real Estate Broker" },
      { value: "Stock Broker", label: "Stock Broker" },
      { value: "Insurance Broker", label: "Insurance Broker" },
      { value: "Trade Broker", label: "Trade Broker" },
      { value: "Freight Broker", label: "Freight Broker" },
    ],
    Seller: [
      { value: "Real Estate Broker", label: "Real Estate Broker" },
      { value: "Stock Broker", label: "Stock Broker" },
      { value: "Trade Broker", label: "Trade Broker" },
      { value: "Freight Broker", label: "Freight Broker" },
      { value: "Insurance Broker", label: "Insurance Broker" },
    ],
    Distributor: [
      { value: "Insurance Broker", label: "Insurance Broker" },
      { value: "Freight Broker", label: "Freight Broker" },
      { value: "Trade Broker", label: "Trade Broker" },
    ],
    Vendor: [
      { value: "Trade Broker", label: "Trade Broker" },
      { value: "Real Estate Broker", label: "Real Estate Broker" },
      { value: "Stock Broker", label: "Stock Broker" },
    ],
    Customer: [
      { value: "Stock Broker", label: "Stock Broker" },
      { value: "Insurance Broker", label: "Insurance Broker" },
      { value: "Real Estate Broker", label: "Real Estate Broker" },
      { value: "Freight Broker", label: "Freight Broker" },
    ],
  };

  const handleAadatPartyChange = (value) => {
    setAadatParty(value);
    setBrokerOptions(brokerDependencies[value] || []);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full gap-2 ">
        <div className="flex flex-col gap-116 w-[15%]">
          <DetailTitle
            title="Terms Details"
            codeName="Total Terms %"
            code="2.2 %"
          />
        </div>
        <div className="flex flex-col w-[80%] gap-4">
          <div className="flex w-full justify-between gap-[40px]">
            <div className="w-1/2 flex gap-12 ">
              <SelectInput
                label="Currnecy (%)"
                placeholder="Select Currency"
                important
                options={[
                  // { value: "", label: "Select Currency" },
                  { value: "AUD", label: "AUD" },
                  { value: "BRL", label: "BRL" },
                  { value: "CAD", label: "CAD" },
                  { value: "USD", label: "USD" },
                  { value: "CNY", label: "CNY" },
                  { value: "EUR", label: "EUR" },
                  { value: "JPY", label: "JPY" },
                  { value: "PKR", label: "PKR" },
                  { value: "RUB", label: "RUB" },
                  { value: "ZAR", label: "ZAR" },
                  { value: "GBP", label: "GBP" },
                ]}
                // {...register("role", { required: "Role is required" })}
                // onChange={(e) => {
                //   setValue("role", e.target.value); // Update the value in React Hook Form
                //   clearErrors("role"); // Clear error when value changes
                // }}
              />
              <SelectInput
                label="Day Terms (O)"
                placeholder="Select Day Terms"
                important
                options={[
                  // { value: "", label: "Select Day Terms" },
                  { value: "Net 30", label: "Net 30" },
                  { value: "Net 60", label: "Net 60" },
                  { value: "Cash on Delivery", label: "Cash on Delivery" },
                  { value: "Prepaid", label: "Prepaid" },
                  { value: "Due on Receipt", label: "Due on Receipt" },
                ]}
                // {...register("role", { required: "Role is required" })}
                // onChange={(e) => {
                //   setValue("role", e.target.value); // Update the value in React Hook Form
                //   clearErrors("role"); // Clear error when value changes
                // }}
              />
            </div>
            <div className="w-1/2">
              <Input
                label="Term Name"
                type="text"
                name="termName"
                placeholder="Enter Term Name"
              />
            </div>
          </div>
          <div className="flex w-full justify-between gap-[40px]">
            <div className="w-1/2 flex gap-12">
              <div className="w-1/2 flex gap-4">
                <Input
                  label="Ext %"
                  name="ext"
                  type="number"
                  placeholder="Enter Ext %"
                />
                <Input
                  label="Rap %"
                  name="rap"
                  type="number"
                  placeholder="Enter Rap %"
                />
              </div>
              <div className="w-1/2 flex gap-4">
                <Input
                  label="Extra %"
                  type="number"
                  name="extra"
                  placeholder="0.00"
                />
                <Input
                  label="Credit Limit"
                  name="creditLimit"
                  type="number"
                  placeholder="Enter Limit "
                />
              </div>
            </div>
            <div className="w-1/2 flex items-center gap-4">
              <div className="w-1/4">
                <Input
                  label="Memo Limit"
                  name="memoLimit"
                  type="number"
                  placeholder="Enter Limit "
                />
              </div>
              <div className="w-3/4 mt-8">
                <div className="flex gap-[10px] w-full">
                  <input type="checkbox" className="" />
                  <div className="w-full flex ">
                    <p className="font-semibold mr-2">Default </p>
                    <span className="text-[#696774] text-[14px]">
                      (Please check the box if the terms should be marked as
                      Default.)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="w-[99%] h-[2px]  bg-[#D9D9D9]"></div>
      <div className="flex w-full gap-2 flex-wrap">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle title="Aadat & Broker Details" />
        </div>
        <div className="flex w-[83%] justify-between gap-[40px]">
          <div className="flex w-1/2 gap-12">
            <div className="w-full flex gap-5">
              <div className="w-full flex gap-2">
                <SelectInput
                  label="Aadat Party 1"
                  placeholder="Select Aadat Party "
                  className="w-full"
                  options={[
                    // { value: "", label: "Select Aadat Party 1" },
                    { value: "Buyer", label: "Buyer" },
                    { value: "Seller", label: "Seller" },
                    { value: "Distributor", label: "Distributor" },
                    { value: "Vendor", label: "Vendor" },
                    { value: "Customer", label: "Customer" },
                  ]}
                  onChange={(e) => handleAadatPartyChange(e.target.value)}
                  // {...register("role", { required: "Role is required" })}
                  // onChange={(e) => {
                  //   setValue("role", e.target.value); // Update the value in React Hook Form
                  //   clearErrors("role"); // Clear error when value changes
                  // }}
                />
              </div>
              <div className="w-20">
                <Input
                  label="Comm"
                  name="comm0"
                  type="number"
                  placeholder="00"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full flex gap-5">
              <div className="w-full flex gap-2">
                <SelectInput
                  label="Broker 1"
                  placeholder="Select Broker 1"
                  className="w-full"
                  options={[
                    // { value: "", label: "Select Broker 1" },
                    ...brokerOptions,
                  ]}
                />
              </div>
              <div className="w-20">
                <Input
                  label="Comm"
                  name="comm1"
                  type="number"
                  placeholder="00"
                  className="w-full"
                />
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
