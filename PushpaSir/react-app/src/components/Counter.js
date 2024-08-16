import { useState } from "react";

export default function Counter() {
  const [num, Setnum] = useState(0);

  return (
    <>
      <center style={{ padding: "100px" }}>
        <button
          style={{
            borderRadius: "4px",
            border: "none",
            padding: "1.2vh",
            margin: "1vh",
            transition: ".2s",
          }}
          onClick={() => {
            Setnum(num - 1);
          }}
        >
          Decrease
        </button>
        <button
          style={{
            borderRadius: "4px",
            border: "none",
            padding: "1.2vh",
            margin: "1vh",
            transition: ",2s",
          }}
          onClick={() => {
            Setnum(0);
          }}
        >
          Reset
        </button>
        <button
          style={{
            borderRadius: "4px",
            border: "none",
            padding: "1.2vh",
            margin: "1vh",
            transition: ".2s",
          }}
          onClick={() => {
            Setnum(num + 1);
          }}
        >
          Increment
        </button>

        <h1>{num}</h1>
      </center>
    </>
  );
}
