//Problem statement
//-Draw circles on the screen on the click and whenver two circles overlap change the second circle

import React, { useEffect, useState } from "react";
import { getRandomColor, detectCircleOverlap } from "./helper/helper";

export default function App() {
  const [elementsCoordinates, setElementsCoordinates] = useState([]);

  //adding eventListener
  useEffect(() => {
    document.addEventListener("click", draw);
    console.log("I am clicked");
    return () => {
      document.removeEventListener("click", draw);
    };
  }, []);
  const draw = (e) => {
    console.log("e", e);
    //get the coordinates where user has clicked
    const { clientX, clientY } = e;
    setElementsCoordinates((prevState) => {
      const current = {
        top: clientY - 100,
        left: clientX - 100,
        right: clientX - 100 + 200,
        bottom: clientY - 100 + 200,
        background: "red",
      };
      for (let i = 0; i < prevState.length; i++) {
        if (detectCircleOverlap(current, prevState[i])) {
          console.log("inside circleoverlp");
          current.background = getRandomColor();
          break;
        }
      }
      return [...prevState, current];
    });
  };
  const Circle = ({ top, left, background }) => {
    return (
      <div
        style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          opacity: 0.5,
          background,
          top,
          left,
        }}
      ></div>
    );
  };
  console.log("elem", elementsCoordinates);
  return (
    <div>
      <h1>helo world</h1>
      {elementsCoordinates.map((e) => (
        <Circle {...e} key={e.top + e.left + e.right} />
      ))}
    </div>
  );
}

// import React, { useEffect } from "react";

// export const App = () => {
//   useEffect(() => {
//     document.addEventListener("click", draw);
//     return () => document.removeEventListener("click", draw);
//   }, []);
//   const draw = (e) => {
//     console.log("e", e);
//   };
//   return <div>App</div>;
// };
