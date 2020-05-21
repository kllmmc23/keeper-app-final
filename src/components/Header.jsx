import React, { useState } from "react";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SvgIcon from "@material-ui/icons/EmojiObjects";

function Header() {
  setInterval(clock, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  
  function clock() {
    const newTime = new Date().toLocaleTimeString();

    setTime(newTime);
  }
  return (
    <header>
      <h1><SvgIcon /> Note Taker App - {time}</h1>
    </header>
  );
}

export default Header;
