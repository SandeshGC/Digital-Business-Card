import React from "react";
import Image from "./images/UserImage.jpg";
function Header() {
  return (
    <div className="header">
      <img
        src={Image}
        alt="brown male with spectacles in black shirt"
        className="user-image"
      />
      <h1>Sandesh GC</h1>
      <h5>FrontEnd Developer</h5>
      <a href="https://www.gcsandesh.com.np" target="_blank" className="link">
        gcsandesh.com.np
      </a>
    </div>
  );
}
export default Header;
