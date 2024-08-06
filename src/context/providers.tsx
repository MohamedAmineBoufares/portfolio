import dynamic from "next/dynamic";
import React from "react";

const ActiveSectionContextProvider = dynamic(() => import("./active-section"), {
  ssr: false, // This ensures the component is not SSR'd
});

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
  );
}

export default Providers;
