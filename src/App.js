import React, { Component } from "react";
import styled from "styled-components";
import background from "./background.png";
import "./App.css";

export const Wrapper = styled.section`

  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
`;

export const Calc = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700;900&display=swap");

  width: 25%;
  height: 500px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 0;

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  div:first-of-type{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

  h1 {
    font-family: "Inconsolata", monospace;
    font-size: 3rem;
    padding-top: 2rem;
    color: black;
    text-shadow: 
    #FFF 0px 0px 5px, 
    #FFF 0px 0px 10px, 
    #FFF 0px 0px 15px, 
    #FF2D95 0px 0px 20px, 
    #FF2D95 0px 0px 30px, 
    #FF2D95 0px 0px 40px, 
    #FF2D95 0px 0px 50px, 
    #FF2D95 0px 0px 75px;
  }

  input{
    width: 60%;
    font-size: 2rem;
    font-family: "Inconsolata", monospace;
    font-weight: 700;
    border-radius: 10%;
    text-align: center;
    outline: none;
    border: none;
  }

  input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }

  div:last-of-type{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button{
    font-family: "Inconsolata", monospace;
    font-size: 1.5rem;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 
    inset 2px 2px 2px 2px #1C6EA4, 
    inset 11px 11px 2px 0px #2285C7, 
    inset 20px 20px 2px 1px #289DEA, 
    inset 29px 29px 2px 1px #57BBEA, 
    5px 5px 15px 5px rgba(0,0,0,0);
    color: white;
    background-color: purple;
    padding: .5em 1em;
    border: none;
    cursor: pointer;
  }

  button:last-of-type{
    background-color: red;
    color: white;
  }

  h2{
    width: 100%;
    font-family: "Inconsolata", monospace;
    font-size: 3rem;
    background-color: transparent;
    color: black;
    text-align: center;
    text-shadow: 
    0 -1px 4px #FFF, 
    0 -2px 10px #ff0, 
    0 -10px 20px #ff8000, 
    0 -18px 40px #F00;
  }
`;

export default class App extends Component {

  state = {
    numberOne: "",
    numberTwo: "",
    result: ""
  };

  handleChangeOne = (e) => {
    this.setState({
      numberOne: Number(e.target.value)
    })
  };

  handleChangeTwo = (e) => {
    this.setState({
      numberTwo: Number(e.target.value)
    })
  };

  soma = (e) => {
    this.setState({
      result: this.state.numberOne + this.state.numberTwo
    })
  };

  less = () => {
    this.setState({
      result: this.state.numberOne - this.state.numberTwo
    })
  };

  multi = () => {
    this.setState({
      result: this.state.numberOne * this.state.numberTwo
    })
  };

  div = () => {
    this.setState({
      result: this.state.numberOne / this.state.numberTwo
    })
  };

  clear = () => {
    this.setState({
      result: 0
    })
  };

  render(){
    return (
    <Wrapper>
      <Calc>
        <h1>Calculadora</h1>
        <input type="number" onChange={this.handleChangeOne}/>
        <input type="number" onChange={this.handleChangeTwo}/>
        <div>
          <button onClick={this.div}>/</button>
          <button onClick={this.multi}>*</button>
          <button onClick={this.less}>-</button>
          <button onClick={this.soma}>+</button>
          <button onClick={this.clear}>C</button>
        </div>
        <h2>{this.state.result}</h2>
        <img src={background} alt="bg"/>
      </Calc>
    </Wrapper>    
    );
  }
}


//* Foi um Delírio coletivo.
// inputNumber = (e) => {
//   if (this.state.result === 0){
//     this.setState ({
//       result: e.target.value
//     })}else{
//       this.setState ({
//         result: Number(this.state.result) + e.target.value
//       })
//   }
// }
// operatorHandler = (e) => {
//   let operatorInput = e.target.value
//   this.setState({
//     calcHandler: operatorInput
//   });
// }
// 
// calc = () => {
// if (this.state.calcHandler === "+"){
//   this.setState({
//     result: Number(this.inputValueOne) + Number(this.inputValueTwo)
//   })
// }
// }  
//* Foi um Delírio coletivo.