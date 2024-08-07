import { useState } from "react";

export default function Counter() {
  const [num, Setnum] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          Setnum(num - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          Setnum(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          Setnum(num + 1);
        }}
      >
        Increment
      </button>

      <h1>{num}</h1>
    </>
  );
}
