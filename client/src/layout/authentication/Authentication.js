import "./authentication.scss";
import SignInForm from "../../components/sign-in/Sign-in";
import SignUpForm from "../../components/sign-up/Sign-up";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
