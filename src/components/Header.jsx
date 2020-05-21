import React, { useState } from "react";

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
      <h1>Note Taker App - {time}</h1>
    </header>
  );
}

export default Header;
