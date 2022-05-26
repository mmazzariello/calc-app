import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Functions = ({ onContentClear, onDelete }) => {
  return (
    <div className="functions">
      <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
      <Button text="&larr;" clickHandler={onDelete} />
    </div>
  );
};

Functions.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired,
};

export default Functions;
