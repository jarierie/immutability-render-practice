import React from "react";

const ChildComponent = ({ setNumber }) => {
  return (
    <>
      {" "}
      <button onClick={() => setNumber(5)}>Child Button</button>
    </>
  );
};

export default ChildComponent;
