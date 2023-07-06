import { Register } from "../component/register";

import {
  Wrapper,
  WrapperBlock,
  WrapperBlockIcons,
  WrapperBlockIconsBlock,
  WrapperBlockIconsBlockImg,
  WrapperBlockText,
  WrapperBlockTitle,
  WrapperBody,
  WrapperBodyButton,
  WrapperBodyText,
  WrapperBodyTitle,
} from "../styled-component/styledGlobal.jsx";
import twitter from "../icons/twitter.png";
import facebook from "../icons/facebook.png";
import linkidin from "../icons/linkedin.png";

const RegisterPage = () => {
  const SignIn = () => {
    window.location.pathname = "/login";
  };

  return (
    <Wrapper>
      <WrapperBody>
        <WrapperBodyTitle>Welcome Back!</WrapperBodyTitle>
        <WrapperBodyText>
          To keep connected with us plase login with your personal info
        </WrapperBodyText>
        <WrapperBodyButton onClick={() => SignIn()}>SIGN IN</WrapperBodyButton>
      </WrapperBody>

      <WrapperBlock>
        <WrapperBlockTitle>Create Account</WrapperBlockTitle>

        <WrapperBlockIcons>

          <WrapperBlockIconsBlock>
            <WrapperBlockIconsBlockImg src={twitter} />
          </WrapperBlockIconsBlock>

          <WrapperBlockIconsBlock>
            <WrapperBlockIconsBlockImg src={facebook} />
          </WrapperBlockIconsBlock>

          <WrapperBlockIconsBlock>
            <WrapperBlockIconsBlockImg src={linkidin} />
          </WrapperBlockIconsBlock>

        </WrapperBlockIcons>

        <WrapperBlockText>use your email to register</WrapperBlockText>

        <Register />
      </WrapperBlock>
    </Wrapper>
  );
};

export default RegisterPage;
