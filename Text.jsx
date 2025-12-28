import React, { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <p>This text is visible!</p>}
    </div>
  );
}

export default ToggleText;