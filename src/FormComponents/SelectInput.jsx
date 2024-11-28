// import React, { forwardRef } from "react";

const SelectInput = ({
  options,
  important,
  value,
  onChange,
  label,
  placeholder,
  className = "",
}) => {
  return (
    <>
      {label && (
        <label className=" block text-gray-700 text-sm font-bold">
          {label}
          {important && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full p-2 rounded border border-[#ccc] ${className}`}
      >
        <option value="" disabled>
          {placeholder || "Select your role"}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
