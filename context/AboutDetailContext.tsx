'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface AboutDetailContextType {
  showDetails: boolean;
  setShowDetails: (show: boolean) => void;
}

export const AboutDetailContext = createContext<AboutDetailContextType>({
  showDetails: false,
  setShowDetails: () => {},
});

export function AboutDetailProvider({ children }: { children: ReactNode }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <AboutDetailContext.Provider value={{ showDetails, setShowDetails }}>
      {children}
    </AboutDetailContext.Provider>
  );
}
