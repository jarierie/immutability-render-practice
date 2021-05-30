import React, { useEffect } from "react";
import { useState } from "react";

const Main = () => {
  const colorArray = ["blue", "red", "green"];

  const [number, setNumber] = useState(0);

  const [string, setString] = useState("tobeUppercased");
  const [object2, setObject2] = useState([5, 6, 7]);

  const [object, setObject] = useState([1, 2, 3, 4]);

  const handleNumberChange = () => {
    setObject("hahahhhaa di gagana");
    console.log(object);
  };

  const setInitialName = () => {
    setObject(colorArray.concat(object2));
  };

  const handleUpperCase = () => {
    setObject(object.concat(colorArray));
  };
  console.log(object);

  console.log(string === string.toUpperCase());

  useEffect(() => {
    console.log("UseEffectCalled");
  }, [object]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>{} </h1>
        <button onClick={handleUpperCase}>{object}</button>
        <button onClick={handleNumberChange}>Click me Maybe?</button>
      </div>
    </>
  );
};

export default Main;
