import React from "react";
import MailIcon from "./images/mail.svg";
import LinkedInIcon from "./images/linkedin.svg";
function NavBar() {
  function sendMail(){
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=gcsandesh01@gmail.com","_blank")
  }
  // function goToLinkedIn(){
  //   window.open("linkedin.com/in/sandesh-gc-8236b2195","_blank")
  // }
  return (
    <div className="nav-container">
      <button id="email-btn" className="call-to-action-btn" onClick={sendMail}>
        <img src={MailIcon} alt="small icon for mail" />
        Email
      </button>
      <button id="linked-in-btn" className="call-to-action-btn" onClick={()=>{window.open("https://www.linkedin.com/in/sandesh-gc-8236b2195","_blank")}}>
        <img src={LinkedInIcon} alt="small icon for LinkedIn" />
        LinkedIn
      </button>
    </div>
  );
}
export default NavBar;
