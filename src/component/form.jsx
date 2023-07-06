import { useState } from "react";
import {
  WrapperBodyButton,
  WrapperForm,
  WrapperFormInput,
} from "../styled-component/styledGlobal";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <WrapperForm>

      <WrapperFormInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <WrapperFormInput
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />

      <WrapperBodyButton onClick={() => handleClick(email, pass)}>
        {title}
      </WrapperBodyButton>
    </WrapperForm>
  );
};

export { Form };
