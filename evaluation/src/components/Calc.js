import React from "react";
import "./App.css";
import InputBox from "./ResultDisplay";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symSelected: null,
      textbox: "",
      firstNum: 0
    };
  }
  setVal = val => {
    if (
      val !== "AC" &&
      val !== "=" &&
      (val !== "+" && val !== "-" && val !== "X")
    ) {
      this.setState({ textbox: "" + this.state.textbox + val });
    } else {
      if (val === "AC") {
        this.setState({ textbox: "", symSelected: null, firstNum: 0 });
      } else if (val === "+" || val === "-" || val === "X") {
        this.setState({ symSelected: val });
        if (this.state.textbox !== "") {
          this.setState({
            firstNum: parseInt(this.state.textbox),
            textbox: ""
          });
        }
      } else {
        const firstNum = this.state.firstNum;
        const secondNum = parseInt(this.state.textbox);
        const sym = this.state.symSelected;
        let tot = 0;

        if (firstNum && secondNum) {
          if (sym === "-") {
            tot = firstNum - secondNum;
          } else if (sym === "+") {
            tot = firstNum + secondNum;
          } else {
            tot = firstNum * secondNum;
          }
          this.setState({
            textbox: "" + tot
          });
        }
      }
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <InputBox val={this.state.textbox} />
        <div className="cal-parent">
          <div
            onClick={() => {
              this.setVal(7);
            }}
            className="item"
          >
            7
          </div>
          <div
            onClick={() => {
              this.setVal(8);
            }}
            className="item"
          >
            8
          </div>
          <div
            onClick={() => {
              this.setVal(9);
            }}
            className="item"
          >
            9
          </div>
          <div
            onClick={() => {
              this.setVal("X");
            }}
            className="item sym-item"
          >
            x
          </div>
          <div
            onClick={() => {
              this.setVal(4);
            }}
            className="item"
          >
            4
          </div>
          <div
            o
            onClick={() => {
              this.setVal(5);
            }}
            className="item"
          >
            5
          </div>
          <div
            onClick={() => {
              this.setVal(6);
            }}
            className="item"
          >
            6
          </div>
          <div
            o
            onClick={() => {
              this.setVal("-");
            }}
            className="item sym-item"
          >
            -
          </div>
          <div
            onClick={() => {
              this.setVal(1);
            }}
            className="item"
          >
            1
          </div>
          <div
            onClick={() => {
              this.setVal("2");
            }}
            className="item"
          >
            2
          </div>
          <div
            onClick={() => {
              this.setVal(3);
            }}
            className="item"
          >
            3
          </div>
          <div
            onClick={() => {
              this.setVal("+");
            }}
            className="item sym-item"
          >
            +
          </div>
          <div
            onClick={() => {
              this.setVal(0);
            }}
            className="item item-width-2"
          >
            0
          </div>
          <div
            onClick={() => {
              this.setVal("AC");
            }}
            className="item"
          >
            AC
          </div>
          <div
            onClick={() => {
              this.setVal("=");
            }}
            className="item sym-item"
          >
            =
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
