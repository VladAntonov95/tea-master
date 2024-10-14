// context/SectionContext.js
import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("");
  const [selectedTea, setSelectedTea] = useState(null);
  const [selectedTableware, setSelectedTableware] = useState(null);

  return (
    <SectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        selectedTea,
        setSelectedTea,
        selectedTableware,
        setSelectedTableware,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  return useContext(SectionContext);
};
