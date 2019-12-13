import "./custom-button.styles.scss";
import React from "react";

const CustomButton = ({ children, isGoogleSignIn, ...others }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...others}
    >
      {children}
    </button>
  );
};

export default CustomButton;
