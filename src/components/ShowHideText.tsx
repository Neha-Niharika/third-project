import { useState } from "react";
function ShowHideText() {
  const [isVisible, setVisiblity] = useState(false);
  function handleChange() {
    setVisiblity((isVisible) => !isVisible);
  }
  return (
    <>
      <button onClick={handleChange}>
        {isVisible ? "Hide Button" : "Show Button"}
      </button>
      {isVisible && <p>This is the hidden text. Now it's visible!</p>}
    </>
  );
}
export default ShowHideText;
