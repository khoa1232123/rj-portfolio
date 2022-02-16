import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <div className={`bg-light ${darkmode ? "darkmode" : ""}`}>
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
