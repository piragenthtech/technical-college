import React, { useState } from "react";
function Testform() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form>
        <label>Input Value</label>
        <input
          type="text"
          //   value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        {/* <p>{printthing()}</p> */}
        <p>
          {inputValue == "piragenth" ? (
            <center>
              <h1>{inputValue} 🐱‍🏍🐱‍🏍</h1>
            </center>
          ) : (
            <p>{inputValue}</p>
          )}
        </p>
      </form>
    </div>
  );
}

export default Testform;
