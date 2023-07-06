import { Form } from "./form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slice/userSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

const Register = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  

  const HandleRegister = (email , password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
        dispatch(setUser({
          email : user.email,
          token : user.accessToken,
          id : user.uid,
        }));
        navigate("/login")
      })
      .catch(()=>alert('Invalid user !!!'));

  };

  return (
    <Form
      title="Register"
      handleClick={HandleRegister}
    />
  );
};

export { Register };
