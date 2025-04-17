import NavBar from "@/components/shared/NavBar/NavBar";
import React from "react";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="border border-black flex flex-col xl:flex-row relative">
      <NavBar />
      {children}
    </section>
  );
};

export default layout;
