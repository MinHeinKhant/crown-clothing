import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, ...others }) => {
  return (
    <div className="group">
      <input className="form-input" {...others} />
      {label ? (
        <label
          className={`${others.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
