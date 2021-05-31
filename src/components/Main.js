import React, { useEffect } from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

const Main = () => {
  const colorArray = ["blue", "red", "green"];

  const [number1, setNumber] = useState(0);

  const [string, setString] = useState("tobeUppercased");
  const [object2, setObject2] = useState([5, 6, 7]);

  const [object1, setObject] = useState([1, 2, 3, 4]);

  const handleNumberChange = () => {
    if (typeof object1 === "number") {
      return;
    } else {
      setObject(object1.push(5));
    }
  };

  useEffect(() => {
    console.log(typeof object1);
  }, [object1]);

  const setInitialName = () => {
    setObject(colorArray.concat(object2));
  };

  const handleUpperCase = () => {
    setObject(object1.concat(colorArray));
  };
  console.log(object1);

  console.log(string === string.toUpperCase());

  useEffect(() => {
    console.log("UseEffectCalled");
  }, [object1]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>{} </h1>
        <button onClick={handleUpperCase}>{object1}</button>
        <button onClick={handleNumberChange}>Click me Maybe?</button>
      </div>
      <h1>{number1}</h1>
      <ChildComponent setNumber={setNumber} />
    </>
  );
};

export default Main;
