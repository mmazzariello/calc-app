import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const MathOperations = ({ onClickOperation, onClickEqual }) => {
  return (
    <section className="math-operations">
      <Button text="+" clickHandler={onClickOperation} />
      <Button text="-" clickHandler={onClickOperation} />
      <Button text="*" clickHandler={onClickOperation} />
      <Button text="/" clickHandler={onClickOperation} />
      <Button text="=" clickHandler={onClickEqual} />
    </section>
  );
};

MathOperations.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired,
};

export default MathOperations;
