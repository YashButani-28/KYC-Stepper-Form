// import DetailTitle from "../DetailTitle";
// import Input from "../formComponents/Input";
// import SelectInput from "../formComponents/SelectInput";
// import ButtonGroup from "./ButtonGroup";
// import { useState } from "react-router-dom";

// export default function AddressDetails() {
// const [selectedCountry, setSelectedCountry] = useState("");
// const [selectedState, setSelectedState] = useState("");
// const [selectedCity, setSelectedCity] = useState("");
//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex w-full gap-2 ">
//         <div className="flex flex-col gap-4 w-[15%]">
//           <DetailTitle title="Address Details" />
//         </div>
//         <div className="flex flex-col w-[80%] gap-4">
//           <div className="flex w-full justify-between gap-[40px]">
//             <div className="w-1/4">
//               <SelectInput
//                 label="Type"
//                 important
//                 options={[
//                   { value: "", label: "Select Type" },
//                   { value: "Temporary Address", label: "Temporary Address" },
//                   { value: "Permanent Address", label: "Permanent Address" },
//                   { value: "Corporate Address", label: "Corporate Address" },
//                   { value: "Billing Address", label: "Billing Address" },
//                   { value: "Shipping Address", label: "Shipping Address" },
//                   { value: "Postal Address", label: "Postal Address" },
//                 ]}
//                 // {...register("role", { required: "Role is required" })}
//                 // onChange={(e) => {
//                 //   setValue("role", e.target.value); // Update the value in React Hook Form
//                 //   clearErrors("role"); // Clear error when value changes
//                 // }}
//               />
//             </div>
//             <div className="w-1/4">
//               <Input
//                 label="Company Name"
//                 name="companyName"
//                 placeholder="Enter Company Name"
//               />
//             </div>
//             <div className="w-1/4 flex gap-4">
//               <Input
//                 label="Contact No."
//                 name="contactNo"
//                 type="number"
//                 placeholder="Enter Contact"
//               />
//               <Input label="Unit" name="unit" placeholder="Enter Flat Number" />
//             </div>
//             <div className="w-1/4">
//               <Input
//                 label="Building"
//                 name="building"
//                 placeholder="Enter Building"
//               />
//             </div>
//           </div>
//           <div className="flex w-full justify-between gap-[40px]">
//             <div className="w-1/4">
//               <Input label="Street" name="street" placeholder="Enter Street" />
//             </div>
//             <div className="w-1/4 flex gap-4">
//               <Input
//                 label="Landmark"
//                 name="landmark"
//                 placeholder="Enter Landmark"
//               />
//               <Input label="Area" name="area" placeholder="Enter Area" />
//             </div>
//             <div className="w-1/4 flex gap-4">
//               <SelectInput
//                 label="Country"
//                 important
//                 options={[
//                   { value: "", label: "Select Country" },
//                   { value: "Admin", label: "Admin" },
//                   { value: "User", label: "User" },
//                 ]}
//                 // {...register("role", { required: "Role is required" })}
//                 // onChange={(e) => {
//                 //   setValue("role", e.target.value); // Update the value in React Hook Form
//                 //   clearErrors("role"); // Clear error when value changes
//                 // }}
//               />
//               <SelectInput
//                 label="State"
//                 options={[
//                   { value: "", label: "Select State" },
//                   { value: "Admin", label: "Admin" },
//                   { value: "User", label: "User" },
//                 ]}
//                 // {...register("role", { required: "Role is required" })}
//                 // onChange={(e) => {
//                 //   setValue("role", e.target.value); // Update the value in React Hook Form
//                 //   clearErrors("role"); // Clear error when value changes
//                 // }}
//               />
//             </div>
//             <div className="w-1/4 flex gap-4">
//               <SelectInput
//                 label="City"
//                 important
//                 options={[
//                   { value: "", label: "Select City" },
//                   { value: "Admin", label: "Admin" },
//                   { value: "User", label: "User" },
//                 ]}
//                 // {...register("role", { required: "Role is required" })}
//                 // onChange={(e) => {
//                 //   setValue("role", e.target.value); // Update the value in React Hook Form
//                 //   clearErrors("role"); // Clear error when value changes
//                 // }}
//               />
//               <Input
//                 label="Zip Code"
//                 name="zipcode"
//                 type="number"
//                 placeholder="Enter Zip Code"
//               />
//             </div>
//           </div>
//           <div className="flex gap-[10px] mt-2 w-full">
//             <input type="checkbox" className="" />
//             <div className="w-full flex ">
//               <p className="font-semibold mr-2 text-[14px]">
//                 Please check the box if the Address should be marked as Default.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end gap-[20px]">
//         <ButtonGroup />
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import DetailTitle from "../DetailTitle";
import Input from "../formComponents/Input";
import SelectInput from "../formComponents/SelectInput";
import ButtonGroup from "./ButtonGroup";

export default function AddressDetails() {
  // State hooks for selected country, state, and city
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Data structure for countries, states, and cities

  const data = {
    India: {
      states: {
        Maharashtra: ["Mumbai", "Pune", "Nagpur"],
        Uttar_Pradesh: ["Lucknow", "Kanpur", "Varanasi"],
        Tamil_Nadu: ["Chennai", "Coimbatore", "Madurai"],
        Karnataka: ["Bangalore", "Mysore", "Hubli"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      },
    },

    Australia: {
      states: {
        "New South Wales": ["Sydney", "Newcastle", "Coffs Harbour"],
        Victoria: ["Melbourne", "Geelong", "Ballarat"],
        Queensland: ["Brisbane", "Gold Coast", "Cairns"],
        "Western Australia": ["Perth", "Bunbury", "Mandurah"],
        South_Australia: ["Adelaide", "Mount Gambier", "Whyalla"],
      },
    },
    Brazil: {
      states: {
        "Sao Paulo": ["Sao Paulo", "Campinas", "Santos"],
        Rio: ["Rio de Janeiro", "Niteroi", "Petropolis"],
        "Minas Gerais": ["Belo Horizonte", "Uberlandia", "Contagem"],
        Parana: ["Curitiba", "Londrina", "Maringa"],
      },
    },
    Canada: {
      states: {
        Ontario: ["Toronto", "Ottawa", "Hamilton"],
        Quebec: ["Montreal", "Quebec City", "Gatineau"],
        "British Columbia": ["Vancouver", "Victoria", "Surrey"],
        Alberta: ["Calgary", "Edmonton", "Red Deer"],
      },
    },
    United_States: {
      states: {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        New_York: ["New York City", "Buffalo", "Rochester"],
        Texas: ["Austin", "Dallas", "Houston"],
        Florida: ["Miami", "Orlando", "Tampa"],
      },
    },
    China: {
      states: {
        Beijing: ["Beijing City"],
        Shanghai: ["Shanghai City"],
        Guangdong: ["Guangzhou", "Shenzhen", "Zhuhai"],
        Sichuan: ["Chengdu", "Mianyang", "Leshan"],
      },
    },
    Italy: {
      states: {
        Lazio: ["Rome", "Viterbo", "Rieti"],
        Lombardy: ["Milan", "Bergamo", "Brescia"],
        Tuscany: ["Florence", "Pisa", "Siena"],
        Veneto: ["Venice", "Verona", "Padua"],
      },
    },
    Japan: {
      states: {
        Tokyo: ["Tokyo City"],
        Osaka: ["Osaka City"],
        Kyoto: ["Kyoto City"],
        Hokkaido: ["Sapporo", "Asahikawa", "Hakodate"],
      },
    },
    Pakistan: {
      states: {
        Punjab: ["Lahore", "Faisalabad", "Rawalpindi"],
        Sindh: ["Karachi", "Hyderabad", "Sukkur"],
        Khyber_Pakhtunkhwa: ["Peshawar", "Mardan", "Abbottabad"],
        Balochistan: ["Quetta", "Gwadar", "Zhob"],
      },
    },
    Russia: {
      states: {
        Moscow: ["Moscow City"],
        St_Petersburg: ["St. Petersburg City"],
        Tatarstan: ["Kazan", "Naberezhnye Chelny"],
        Siberia: ["Novosibirsk", "Omsk", "Krasnoyarsk"],
      },
    },
    South_Africa: {
      states: {
        Gauteng: ["Johannesburg", "Pretoria", "Ekurhuleni"],
        Western_Cape: ["Cape Town", "Paarl", "George"],
        KwaZulu_Natal: ["Durban", "Pietermaritzburg", "Richards Bay"],
        Eastern_Cape: ["Port Elizabeth", "East London"],
      },
    },
    United_Kingdom: {
      states: {
        England: ["London", "Manchester", "Birmingham"],
        Scotland: ["Edinburgh", "Glasgow", "Aberdeen"],
        Wales: ["Cardiff", "Swansea", "Newport"],
        Northern_Ireland: ["Belfast", "Londonderry", "Lisburn"],
      },
    },

    // Additional countries can be added here
  };

  // Country options for the dropdown
  const countryOptions = [
    // { value: "", label: "Select Country" },
    { value: "India", label: "India" },
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
    // Add more countries as needed
  ];

  // Generate state options based on the selected country
  const stateOptions = selectedCountry
    ? Object.keys(data[selectedCountry].states).map((state) => ({
        value: state,
        label: state,
      }))
    : undefined;

  // Generate city options based on the selected state
  const cityOptions = selectedState
    ? data[selectedCountry].states[selectedState].map((city) => ({
        value: city,
        label: city,
      }))
    : undefined;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full gap-2">
        <div className="flex flex-col gap-4 w-[15%]">
          <DetailTitle title="Address Details" />
        </div>
        <div className="flex flex-col w-[80%] gap-4">
          <div className="flex w-full justify-between gap-[40px]">
            <div className="w-1/4">
              <SelectInput
                label="Type"
                placeholder="Select Type"
                important
                options={[
                  // { value: "", label: "Select Type" },
                  { value: "Temporary Address", label: "Temporary Address" },
                  { value: "Permanent Address", label: "Permanent Address" },
                  { value: "Corporate Address", label: "Corporate Address" },
                  { value: "Billing Address", label: "Billing Address" },
                  { value: "Shipping Address", label: "Shipping Address" },
                  { value: "Postal Address", label: "Postal Address" },
                ]}
              />
            </div>
            <div className="w-1/4">
              <Input
                label="Company Name"
                name="companyName"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="w-1/4 flex gap-4">
              <Input
                label="Contact No."
                name="contactNo"
                type="number"
                placeholder="Enter Contact"
              />
              <Input label="Unit" name="unit" placeholder="Enter Flat Number" />
            </div>
            <div className="w-1/4">
              <Input
                label="Building"
                name="building"
                placeholder="Enter Building"
              />
            </div>
          </div>
          <div className="flex w-full justify-between gap-[40px]">
            <div className="w-1/4">
              <Input label="Street" name="street" placeholder="Enter Street" />
            </div>
            <div className="w-1/4 flex gap-4">
              <Input
                label="Landmark"
                name="landmark"
                placeholder="Enter Landmark"
              />
              <Input label="Area" name="area" placeholder="Enter Area" />
            </div>
            <div className="w-1/4 flex gap-4">
              <SelectInput
                label="Country"
                placeholder="Select Country"
                important
                options={countryOptions}
                value={selectedCountry}
                onChange={(e) => {
                  const country = e.target.value;
                  setSelectedCountry(country);
                  setSelectedState("");
                  setSelectedCity("");
                }}
              />
              <SelectInput
                label="State"
                options={stateOptions}
                placeholder="Select State"
                value={selectedState}
                onChange={(e) => {
                  const state = e.target.value;
                  setSelectedState(state);
                  setSelectedCity("");
                }}
              />
            </div>
            <div className="w-1/4 flex gap-4">
              <SelectInput
                label="City"
                placeholder="Select City"
                important
                options={cityOptions}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
              <Input
                label="Zip Code"
                name="zipcode"
                type="number"
                placeholder="Enter Zip Code"
              />
            </div>
          </div>
          <div className="flex gap-[10px] mt-2 w-full">
            <input type="checkbox" className="" />
            <div className="w-full flex">
              <p className="font-semibold mr-2 text-[14px]">
                Please check the box if the Address should be marked as Default.
              </p>
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
