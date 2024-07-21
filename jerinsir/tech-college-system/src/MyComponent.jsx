import React, { useState } from "react";

function MyComponent() {
  const [age, agestate] = useState(0);
  const increment = () => {
    agestate(age + 1);
  };
  return (
    <div>
      <button onClick={increment}>ageincrease</button>
      <h1>{age}</h1>
    </div>
  );
}

export default MyComponent;
