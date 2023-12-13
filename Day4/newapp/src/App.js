import React from "react";
import { useState } from "react";
import Temp from "./Components/Home";
 
const StateEx =()=>{
  const[data, setData] = useState(0);
  const inc=()=>{
    setData(data+1);
  }
  const dec =()=>{
    setData(data-1);
  }
  return(
    <>
    <Temp/>
    <button onClick={inc}>
    Increase
    </button>
    <p>{data}</p>
    <button onClick={dec}>
    Decrease
    </button>
    </>
  )
}
export default StateEx;
