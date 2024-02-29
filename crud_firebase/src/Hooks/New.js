import React,{useState,useEffect, useRef} from 'react'

function New() {
    const [state, children]= useState("old");
const [count,setCount]= useState(0);
const [inputValue,setInputValue]= useState("");
const count1 = useRef(0)
 useEffect(()=>{
    count1.current = count1.current+1
 })    
useEffect(()=>{
        setTimeout(()=>{
 setCount((count)=> count+1)
        },1000)
    })
// const intialTodos  = [
//     {
//         id:1,
//         title:"first",
//         complete:false,
//         },
//         {
//             id:2
// ,
// title:"second",
// complete:false ,
//        },
// ];

  return (
    <div>
      <h2>Hooks</h2>
      <h4>UseState{state}</h4>
      <button 
      type='buttton' onClick={()=> children("set")}>
click
      </button>
      <h4>useEffect- count inc {count}</h4>
      <h4>useContext(nexted loop)</h4>
      <h4>useRef- directly create ref </h4>
      <input type='text'
      value={inputValue}
      onChange={(e)=> setInputValue(e.target.value)}/>
    <h5>Render Count {count1.current}</h5>
    <h4>useReducer</h4>
    </div>
  )
}

export default New
