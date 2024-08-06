import React from "react";
import ActiveSectionContextProvider from "./active-section";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
  );
}

export default Providers;
