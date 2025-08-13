import React, { Component , memo , PureComponent } from "react";

// Coponent Class

//  class PureCompo extends PureComponent {

//  render(){
//  console.log("pure");

//  return(
//      <h2>
//          {"Pure Component  :" + this.props.name}
//      </h2>
//  )
//  }
//  }

// export default PureCompo;

// Componenet Function

const PureCompo = (props)=>{

return(
    <h2>
        {"Pure Component  :" + props.name}
    </h2>
)

}

export default memo(PureCompo); 