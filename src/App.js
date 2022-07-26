import React, {Component} from "react";


export default class App extends Component{

  state = {
    numberOne: "",
    numberTwo: "",
    result: "",
  }

  soma = () => {
    this.setState ({
      result: this.state.numberOne + this.state.numberTwo
    })
  }

  less = () => {
    this.setState ({
      result: this.state.numberOne - this.state.numberTwo
    })
  }

  multi = () => {
    this.setState ({
      result: this.state.numberOne * this.state.numberTwo
    })
  }

  div = () => {
    this.setState ({
      result: this.state.numberOne / this.state.numberTwo
    })
  }

  clear = () => {
    this.setState ({
      result: "0"
    })
  }

  handleChangeOne = (e) => {
    this.setState ({
      numberOne: e.target.value
    })
  }

  handleChangeTwo = (e) => {
    this.setState ({
      numberTwo: e.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>OLÁ</h1>
      </div>
    )
  }
}
