import React from "react";
import "./App.css";
import { useState } from "react";

export default function Dark() {
  const [dark, setDarkMode] = useState(false);
  return (
    <div id="container2" className={dark ? "white" : "black"}>
      <div
        id="card"
        className={dark ? "night" : "day"}
        onClick={() => (dark ? setDarkMode(false) : setDarkMode(true))}
      >
        <h1 className="title">{dark ? "🌝" : "🌞"}</h1>
      </div>
    </div>
  );
}
