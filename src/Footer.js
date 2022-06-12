import React from "react";
import TwitterIcon from "./images/twitter-icon.png";
import FacebookIcon from "./images/facebook-icon.png";
import InstagramIcon from "./images/instagram-icon.png";
import GithubIcon from "./images/github-icon.png";

function Footer() {
  return (
    <footer>
      <img src={TwitterIcon} className="social-media-icon" onClick={()=>{window.open("https://twitter.com/gcsandesh01","_blank")}}/>
      <img src={FacebookIcon} className="social-media-icon" onClick={()=>{window.open("https://facebook.com/gcsandesh01","_blank")}}/>
      <img src={InstagramIcon} className="social-media-icon" onClick={()=>{window.open("https://instagram.com/sandesvandes","_blank")}}/>
      <img src={GithubIcon} className="social-media-icon" onClick={()=>{window.open("https://github.com/SandeshGC","_blank")}}/>
    </footer>
  );
}
export default Footer;
