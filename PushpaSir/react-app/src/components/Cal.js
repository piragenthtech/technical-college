import { useState } from "react";

export default function Cal() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [outnum, setoutnum] = useState(3);

  function handleNum1(e) {
    setnum1(+e.target.value);
  }
  function handleNum2(e) {
    setnum2(+e.target.value);
  }
  
  function sum() {
    setoutnum(num1 + num2);
  }
  function deduction() {
    setoutnum(num1 - num2);
  }
  function multiply() {
    setoutnum(num1 * num2);
  }
  function divide() {
    setoutnum(num1 / num2);
  }

  return (
    <div style={{ textAlign: "center", margin: "10vh" }}>
      <input
        type="number"
        placeholder="Num1"
        onChange={handleNum1}
        style={{
          border: "2px solid blue",
          marginRight: "20px",
          borderRadius: "4px",
          padding: "1vh",
        }}
      />
      <input
        type="number"
        placeholder="Num2"
        onChange={handleNum2}
        style={{
          border: "2px solid blue",
          borderRadius: "4px",
          padding: "1vh",
        }}
      />
      <br />
      <br />
      <button
        style={{
          padding: "1vh",
          margin: "10px",
          paddingLeft: "1.5vh",
          paddingRight: "1.5vh",
          border: "none",
          borderRadius: "6px",
          fontSize: "30px",
        }}
        onClick={sum}
      >
        sum( + )
      </button>
      <button
        style={{
          padding: "1vh",
          margin: "10px",

          paddingLeft: "1.5vh",
          paddingRight: "1.5vh",
          border: "none",
          borderRadius: "6px",
          fontSize: "30px",
        }}
        onClick={deduction}
      >
        deduction( - )
      </button>
      <button
        style={{
          padding: "1vh",
          margin: "10px",

          paddingLeft: "1.5vh",
          paddingRight: "1.5vh",
          border: "none",
          borderRadius: "6px",
          fontSize: "30px",
        }}
        onClick={multiply}
      >
        multiply( * )
      </button>
      <button
        style={{
          padding: "1vh",
          margin: "10px",

          paddingLeft: "1.5vh",
          paddingRight: "1.5vh",
          border: "none",
          borderRadius: "6px",
          fontSize: "30px",
        }}
        onClick={divide}
      >
        divide( / )
      </button>
      <br />
      <br />
      <h2>{outnum}</h2>
    </div>
  );
}
