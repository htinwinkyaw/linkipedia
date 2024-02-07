import React from "react";

interface CustomCheckboxSwitchProps {
  active: boolean;
  onChange: () => void;
}

const CustomCheckboxSwitch: React.FC<CustomCheckboxSwitchProps> = ({
  active,
  onChange,
}) => {
  return (
    <input
      type="checkbox"
      className="toggle"
      checked={active}
      onChange={onChange}
    />
  );
};

export default CustomCheckboxSwitch;
