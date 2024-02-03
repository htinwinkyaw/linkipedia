import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import React from "react";

interface CustomInputProps {
  id: string;
  type?: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  rules?: Partial<{
    required: string | boolean;
    minLength: { value: number; message: string };
    maxLength: { value: number; message: string };
    pattern: { value: RegExp; message: string };
  }>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  type,
  label,
  placeholder,
  register,
  errors,
  disabled,
  rules,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={`${errors[id] && "text-error"}`}>
        {label}
      </label>
      <input
        id={id}
        type={type || ""}
        {...register(id, rules)}
        placeholder={placeholder}
        autoComplete="off"
        disabled={disabled}
        className={`input input-bordered w-full max-w-xs rounded-md 
          placeholder:text-sm placeholder:opacity-70 
          ${errors[id] && "input-error border-error"}`}
      />
    </div>
  );
};

export default CustomInput;
