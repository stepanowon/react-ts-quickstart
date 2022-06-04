import React from "react";
import PropTypes from "prop-types";

type CalcPropsTypes = {
  x: number;
  y: number;
  oper: string;
};

const Calc = (props: CalcPropsTypes) => {
  let result: number = 0;
  switch (props.oper) {
    case "+":
      result = props.x + props.y;
      break;
    case "*":
      result = props.x * props.y;
      break;
    default:
      result = 0;
  }

  return (
    <div>
      <h3>연산 방식 : {props.oper}</h3>
      <hr />
      <div>
        {props.x} {props.oper} {props.y} = {result}
      </div>
    </div>
  );
};

const calcChecker = (props: any, propName: string, componentName: string) => {
  if (propName === "oper") {
    if (props[propName] !== "+" && props[propName] !== "*") {
      return new Error(`${propName}속성의 값은
            반드시 '+', '*'만 허용합니다(at ${componentName}).`);
    }
  }
  if (propName === "y") {
    let y = props[propName];
    if (y > 100 || y < 0 || y % 2 !== 0) {
      return new Error(`${propName}속성의 값은 
            0이상 100이하의 짝수만 허용합니다.(at ${componentName}).`);
    }
  }
};

Calc.propTypes = {
  x: PropTypes.number.isRequired,
  y: calcChecker,
  oper: calcChecker,
};

export default Calc;
