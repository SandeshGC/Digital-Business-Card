import React from "react";
import NavBar from "./NavBar";

function Content() {
  return (
    <div className="main-content">
        <NavBar />
      <h3>About</h3>
      <p>
        I am a frontend web developer who is always looking for new things to
        learn. Besides, I am a Computer Engineering student at IOE
        Pashchimanchal Campus, Pokhara.
      </p>
      <h3>Interests</h3>
      <p>Coding, Travelling, Swimming, Music, TV, Games.</p>
    </div>
  );
}
export default Content;
