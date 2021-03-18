import React, { useState } from "react";

import "./styles.css";

const ToggleSwitch = ({
  initialChecked = false,
  round = false,
  backgroundColor = "#2196F3",
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const computedStyles = {
    backgroundColor: checked ? backgroundColor : "#CCC",
  };

  const computedClassName = "slider" + (round ? " round" : "");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <label data-testid="switch" className="switch">
      <input
        type="checkbox"
        checked={checked}
        data-testid="checkbox"
        onChange={handleChange}
      />
      <span
        data-testid="slider"
        className={computedClassName}
        style={computedStyles}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
