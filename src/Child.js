import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, matchedRandomColor }) {
  return (
    <div 
      className="child" 
      style={{ backgroundColor: matchedRandomColor }} 
      onClick={onChangeColor}/>);
}

export default Child;
