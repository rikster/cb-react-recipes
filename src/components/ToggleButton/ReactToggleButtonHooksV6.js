import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(true);

  return <button onClick={() => setOn(!on)}>{on ? "ON" : "OFF"}</button>;
};

export default Toggle;
