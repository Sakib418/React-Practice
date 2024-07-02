import React from "react";
import TempretureVerdict from "./TempretureVerdict";
import TempretureInput from "./TempretureInput";
import { convert,toCelcious,toFahrenheit } from "./converter";

export default class Calculator extends React.Component{
  state = {tempreture : '', scale: 'c'};

  tempretureChange = (e,scale) => {
     this.setState({
      tempreture: e.target.value,
      scale,
     });
  };
  
    render(){
       const {tempreture,scale} = this.state;
       const celcious = scale === 'f' ? convert(tempreture,toCelcious) : tempreture;
       const fahrenheit = scale === 'c' ? convert(tempreture,toFahrenheit) : tempreture;
        return(
        <>
        <TempretureInput scale="c" tempreture = {celcious} tempretureChange = {this.tempretureChange}/>
        <TempretureInput scale="f" tempreture = {fahrenheit} tempretureChange = {this.tempretureChange}/>
         <TempretureVerdict celcious={parseFloat(tempreture)} /> 
        </>
        );
        
    }
}

