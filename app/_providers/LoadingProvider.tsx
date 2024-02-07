import { LoadingContextProvider } from "../_hooks/useLoading";
import React from "react";

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  return <LoadingContextProvider>{children}</LoadingContextProvider>;
};

export default LoadingProvider;
