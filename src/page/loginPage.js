import { Login } from "../component/login";
import "../css/global.css";
import {
  Wrapper,
  WrapperBlock,
  WrapperBlockText,
  WrapperBlockTitle,
  WrapperBody,
  WrapperBodyButton,
  WrapperBodyText,
  WrapperBodyTitle,
} from "../styled-component/styledGlobal.jsx";

const LoginPage = () => {
  const SignUp = () => {
    window.location.pathname = "/register";
  };

  return (
    <Wrapper>

      <WrapperBody>
        <WrapperBodyTitle>Create Account</WrapperBodyTitle>
        <WrapperBodyText>use your email to register</WrapperBodyText>
        <WrapperBodyButton onClick={() => SignUp()}>SIGN UP</WrapperBodyButton>
      </WrapperBody>

      <WrapperBlock>
        <WrapperBlockTitle>Welcome Back!</WrapperBlockTitle>
        <WrapperBlockText>
          To keep connected with us plase login with your personal info
        </WrapperBlockText>

        <Login />
      </WrapperBlock>

    </Wrapper>
  );
};

export default LoginPage;
