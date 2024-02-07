import { IconType } from "react-icons";
import React from "react";

interface CustomButtonProps {
  label?: string;
  icon?: IconType;
  outline?: boolean;
  full?: boolean;
  disabled?: boolean;
  custom?: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  icon: Icon,
  outline,
  full,
  disabled,
  custom,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`btn disabled:cursor-not-allowed disabled:opacity-70 
          ${outline && "btn-outline"} ${full && "w-full"} ${custom}`}
        disabled={disabled}
      >
        <div className="flex gap-1">
          {Icon && <Icon size={24} />}
          {label}
        </div>
      </button>
    </div>
  );
};

export default CustomButton;
