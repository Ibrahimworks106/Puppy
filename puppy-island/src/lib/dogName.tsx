"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DogNameContextType {
  dogName: string;
  setDogName: (name: string) => void;
}

const DogNameContext = createContext<DogNameContextType | undefined>(undefined);

export const DogNameProvider = ({ children }: { children: ReactNode }) => {
  const [dogName, setDogName] = useState("Max");

  return (
    <DogNameContext.Provider value={{ dogName, setDogName }}>
      {children}
    </DogNameContext.Provider>
  );
};

export const useDogName = () => {
  const context = useContext(DogNameContext);
  if (context === undefined) {
    throw new Error("useDogName must be used within a DogNameProvider");
  }
  return context;
};
