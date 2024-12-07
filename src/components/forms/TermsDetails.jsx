import DetailTitle from "../DetailTitle";
import Input from "../formComponents/Input";
import SelectInput from "../formComponents/SelectInput";
import ButtonGroup from "../formComponents/ButtonGroup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveFormData } from "../../redux/slices/forms";
import { useDispatch } from "react-redux";

export default function TermsDetails() {
  const dispatch = useDispatch();
  const [submitAction, setSubmitAction] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      currency: "",
      dayTerm: "",
      termName: "",
      ExtPercent: "",
      ExtraPercent: "",
      creaditLimit: "",
      memoLimit: "",
      aadatParty: "",
      commAadat: "",
      broker1: "",
      commBroker1: "",
    },
  });

  const watchAadatParty = watch("aadatParty");

  const brokerDependencies = {
    Buyer: [
      "Real Estate Broker",
      "Stock Broker",
      "Insurance Broker",
      "Trade Broker",
      "Freight Broker",
    ],
    Seller: [
      "Real Estate Broker",
      "Stock Broker",
      "Trade Broker",
      "Freight Broker",
    ],
    Distributor: ["Insurance Broker", "Freight Broker", "Trade Broker"],
    Vendor: ["Trade Broker", "Real Estate Broker", "Stock Broker"],
    Customer: [
      "Stock Broker",
      "Insurance Broker",
      "Real Estate Broker",
      "Freight Broker",
    ],
  };

  const onSubmit = (data) => {
    if (submitAction === "save") {
      dispatch(saveFormData({ formId: 2, data }));

      console.log("Save data:", data);
      // Add your save logic here
    } else if (submitAction === "saveAndNext") {
      dispatch(saveFormData({ formId: 2, data }));

      console.log("Save and Next data:", data);
      // Add your save logic here
      navigate("/layout/user-details");
    }
  };
  const handleSave = () => {
    setSubmitAction("save");
  };

  const handleSaveAndNext = () => {
    setSubmitAction("saveAndNext");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
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
              <div className="flex flex-col w-full">
                <SelectInput
                  label="Currnecy (%)"
                  placeholder="Select Currency"
                  {...register("currency", {
                    required: "Currency is required",
                  })}
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
                  onChange={(e) => {
                    setValue("currency", e.target.value);
                    clearErrors("currency");
                  }}
                />
                {errors.currency && (
                  <p className="text-red-500 text-sm ml-[10px] mt-1">
                    {errors.currency.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col w-full">
                <SelectInput
                  label="Day Terms (O)"
                  placeholder="Select Day Terms"
                  {...register("dayTerm", {
                    required: "Day Terms is required",
                  })}
                  important
                  options={[
                    { value: "Net 30", label: "Net 30" },
                    { value: "Net 60", label: "Net 60" },
                    { value: "Cash on Delivery", label: "Cash on Delivery" },
                    { value: "Prepaid", label: "Prepaid" },
                    { value: "Due on Receipt", label: "Due on Receipt" },
                  ]}
                  onChange={(e) => {
                    setValue("dayTerm", e.target.value);
                    clearErrors("dayTerm");
                  }}
                />
                {errors.dayTerm && (
                  <p className="text-red-500 text-sm ml-[10px] mt-1">
                    {errors.dayTerm.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <Input
                label="Term Name"
                {...register("termName")}
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
                  {...register("ExtPercent")}
                  name="ExtPercent"
                  type="number"
                  placeholder="Enter Ext %"
                />
                <Input
                  label="Rap %"
                  {...register("RapPercent")}
                  name="RapPercent"
                  type="number"
                  placeholder="Enter Rap %"
                />
              </div>
              <div className="w-1/2 flex gap-4">
                <Input
                  label="Extra %"
                  {...register("ExtraPercent")}
                  type="number"
                  name="ExtraPercent"
                  placeholder="0.00"
                />
                <Input
                  label="Credit Limit"
                  {...register("creaditLimit")}
                  name="creaditLimit"
                  type="number"
                  placeholder="Enter Limit "
                />
              </div>
            </div>
            <div className="w-1/2 flex items-center gap-4">
              <div className="w-1/4">
                <Input
                  label="Memo Limit"
                  {...register("memoLimit")}
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
                  placeholder="Select Aadat Party"
                  {...register("aadatParty")}
                  className="w-full"
                  options={[
                    { value: "Buyer", label: "Buyer" },
                    { value: "Seller", label: "Seller" },
                    { value: "Distributor", label: "Distributor" },
                    { value: "Vendor", label: "Vendor" },
                    { value: "Customer", label: "Customer" },
                  ]}
                  onChange={(e) => {
                    const selectedAadatPary = e.target.value;
                    setValue("aadatParty", selectedAadatPary);
                    setValue("broker1", "");
                  }}
                />
              </div>
              <div className="w-20">
                <Input
                  label="Comm"
                  name="commAadat"
                  {...register("commAadat")}
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
                  {...register("broker1")}
                  className="w-full"
                  options={
                    watchAadatParty
                      ? brokerDependencies[watchAadatParty]?.map((type) => ({
                          value: type,
                          label: type,
                        }))
                      : []
                  }
                  onChange={(e) => {
                    setValue("broker1", e.target.value);
                  }}
                />
              </div>
              <div className="w-20">
                <Input
                  label="Comm"
                  name="commBroker1"
                  {...register("commBroker1")}
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
        <ButtonGroup
          previousPath="basic-details"
          ResetButton={reset}
          onSave={handleSave}
          onSaveAndNext={handleSaveAndNext}
        />
      </div>
    </form>
  );
}
