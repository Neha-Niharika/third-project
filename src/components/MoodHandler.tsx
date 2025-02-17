import { useState } from "react";

function MoodHandler() {
  const [isLightOn, setIsLightOn] = useState(true);

  return (
    <>
      <h2>{isLightOn ? "Light is on" : "Light is off"}</h2>
      <button onClick={() => setIsLightOn((isLightOn) => !isLightOn)}>
        {isLightOn ? "Turn Off" : "Turn On"}
      </button>
    </>
  );
}
export default MoodHandler;
