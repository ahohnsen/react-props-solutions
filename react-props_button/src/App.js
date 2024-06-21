import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <>
      <Button color="green" text="Submit" onClick={handleClick} />
      <Button color="red" text="Cancel" />
      <Button color="grey" text="Reset" disabled />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button style={{ backgroundColor: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
