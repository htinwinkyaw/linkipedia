"use client";

import React, { useContext, useState } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = React.createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {},
});

interface LoadingContextProviderProps {
  children: React.ReactNode;
}

export const LoadingContextProvider: React.FC<LoadingContextProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  const value = { loading, setLoading };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

const useLoading = () => {
  const context = useContext(LoadingContext);

  if (context === null) throw new Error("Failed to load LoadingContext.");

  return context;
};

export default useLoading;
