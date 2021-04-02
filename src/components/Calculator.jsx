import React, { Component } from "react";

class Calculator extends Component {
  state = {
    main: "",
    history: " ",
    lastOperator: "",
  };

  handleClickValues = (val) => {
    const { lastOperator, main } = this.state;
    this.setState({
      lastOperator: val,
    });
    if (val === "0" && lastOperator === "0" && !main.includes(".")) return;
    if (val === "." && main.includes(".")) return;
    if (/[+-/*]/.test(lastOperator) && /[+-/*]/.test(val)) return;
    if (main === "" && /[+-/*]/.test(val)) return;
    switch (val) {
      case "AC":
        this.setState({ main: "", history: "" });
        break;
      case "=":
        if (/[+-/*]/.test(lastOperator)) {
          this.setState({
            main: eval(main.slice(0, -1)),
            history: eval(main.slice(0, -1)),
          });
        } else this.setState({ main: eval(main), history: eval(main) });
        break;
      case "/":
        this.setState({ main: main + val });
        break;
      case "+":
        this.setState({ main: main + val, lastOperator: val });
        break;
      case "-":
        this.setState({ main: main + val, lastOperator: val });
        break;
      case "*":
        this.setState({ main: main + val, lastOperator: val });
        break;

      default:
        this.setState({ main: main + val });
    }
  };
  render() {
    const values = {
      clear: "AC",
      divide: "/",
      multiply: "*",
      seven: "7",
      eight: "8",
      nine: "9",
      minus: "-",
      four: "4",
      five: "5",
      six: "6",
      add: "+",
      one: "1",
      two: "2",
      three: "3",
      equal: "=",
      zero: "0",
      dot: ".",
    };

    const component = Object.keys(values).map((key) => {
      return (
        <button
          className=" calculator-grid--item"
          value={values[key]}
          key={key}
          id={key}
          onClick={() => this.handleClickValues(values[key])}
        >
          {values[key]}
        </button>
      );
    });

    return (
      <React.Fragment>
        <div className="calculator">
          <div className="calculator-display">
            <div id="display" className="calculator-text">
              <div className="calculator-text--upper">{this.state.history}</div>
              <div className="calculator-text--main">{this.state.main}</div>
            </div>
          </div>

          <div className="calculator-grid">{component}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;
