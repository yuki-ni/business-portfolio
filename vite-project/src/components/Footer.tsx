import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} Pineda Music Tutorial. All rights reserved.
    </footer>
  );
};

export default Footer;
