import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class Loki extends React.Component{
  
    constructor (){
        super ();
        console.log(this);
    }
    render(){
        return (<div>
            <h1 style={{color:"black",backgroundColor:'yellowgreen'}}>Hi loki</h1>
            <h2 className="Container-fluid">{ this.props.name}</h2>
        </div>)
    }
}
export default Loki;
