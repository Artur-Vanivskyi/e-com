import "./sign-up-form.styles.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { signUpStart } from "../../store/user/user.action";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const defaultFormFirleds = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFirled] = useState(defaultFormFirleds);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFirled(defaultFormFirleds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation has an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFirled({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
