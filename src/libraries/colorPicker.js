import React, { useState } from "react";
import { SketchPicker } from "react-color";

function ColorPicker(props) {
  const [color, setColor] = useState("#fff");
  const [showcolor, setShowClor] = useState(false);
  return (
    <div>
      <button onClick={() => setShowClor((showcolor) => !showcolor)}>
        {showcolor ? "close color picker" : "pick a color"}
      </button>
      {showcolor && (
        <SketchPicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h2>you picked {color}</h2>
    </div>
  );
}

export default ColorPicker;
