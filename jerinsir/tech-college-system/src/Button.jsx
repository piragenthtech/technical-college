function Button() {
  const handleClick = (name,e) => name.target.textContent="ouch";

  return (
    <>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={(name,e) => handleClick(name,e)}>Click Me</button>
    </>
  );
}

export default Button;
