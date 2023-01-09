import "./sign-in-form.styles.scss";
import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const SignInForm = () => {

  const dispatch = useDispatch();

  const defaultFormFirleds = {
    email: "",
    password: "",
  };

  const [formFields, setFormFirled] = useState(defaultFormFirleds);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFirled(defaultFormFirleds);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No uses associated with this email");
          break;
        default:
          console.log(error);
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
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
