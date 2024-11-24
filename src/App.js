import { useState } from "react";

import Snowflake from "./Components/Snowflake";
import ColorFix from "./Components/Color";

function App() {
  const [color, setColor] = useState('');
  const [rgbColor, setRgbColor] = useState('rgb(x, x, x)');

  return (
    <>
      <Snowflake rgbColor={rgbColor} />
      <ColorFix color={color} setColor={setColor} rgbColor={rgbColor} setRgbColor={setRgbColor} />
    </>
  );
}

export default App;
