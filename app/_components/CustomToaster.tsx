import React from "react";
import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
        duration: 5000,
        success: {
          style: {
            background: "#4CAF50",
            color: "#fff",
          },
        },
        error: {
          style: {
            background: "#F44336",
            color: "#fff",
          },
        },
        loading: {
          style: {
            background: "#333",
            color: "#fff",
          },
        },
      }}
    />
  );
};

export default CustomToaster;
