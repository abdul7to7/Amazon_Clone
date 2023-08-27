import React, { ReactElement } from "react";
import Header from "./header/Header";
import BottomHeader from "./header/BottomHeader";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
