import { Form } from "./form";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slice/userSlice";
import {useNavigate} from "react-router-dom";


const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const HandleLogin = (email , password) => {
    
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
        dispatch(setUser({
          email : user.email,
          token : user.accessToken,
          id : user.uid,
        }));
        navigate("/");
      })
      .catch(()=>alert(
        `Invalid user !!!    Register`
        ));

  };

  return (
    <Form
      title="Login"
      handleClick={HandleLogin}
    />
  );
};

export { Login };
