import React from "react";
import "./Class1.css"


const Func=( props )=>{ 
    const h1style={color:'red',backgroundColor:'orange'}
return( <div> 
    <h1 style={ h1style}>Hi Nani </h1>
    <h2 className="h2cont">{ props.name} {props.age}</h2>

</div>)
}
export default Func;