import React, { useState } from "react";

function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>
    </div>
  );
}

export default Theme;