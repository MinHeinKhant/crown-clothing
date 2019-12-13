import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account.</h2>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleFormSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
            label="Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
