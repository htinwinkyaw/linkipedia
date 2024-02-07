"use client";

import React, { useState } from "react";

import CustomButton from "../_components/ui/CustomButton";
import LinkForm from "./LinkForm";
import { toggleState } from "../_utils/toggleState";

const NewLink = () => {
  const [displayForm, setDisplayForm] = useState(false);

  const handleLinkFormDisplay = () => {
    toggleState(displayForm, setDisplayForm);
  };

  const display = displayForm ? (
    <LinkForm onCancel={handleLinkFormDisplay} />
  ) : (
    <CustomButton
      label="+ Add Link"
      onClick={handleLinkFormDisplay}
      custom="text-white bg-blue-500 hover:bg-blue-600"
      full
    />
  );

  return <div>{display}</div>;
};

export default NewLink;
