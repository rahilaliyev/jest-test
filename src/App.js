import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const App = () => {
  return (
    <div>
      <ToggleSwitch
        initialChecked={true}
        backgroundColor="green"
        round={true}
      />
    </div>
  );
};

export default App;
