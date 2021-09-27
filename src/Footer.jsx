import React from "react";

const getYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {getYear} </p>
    </footer>
  );
}

export default Footer;
