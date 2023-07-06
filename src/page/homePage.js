import { useAuth } from "../hooks/use-auth";

export default function HomePage() {


  const { isAuth, email  } = useAuth();
  return isAuth ? (
    <div>
      <h1>welcome </h1> <br />
      <button onClick={()=>window.location.pathname = "/login"}> log out {email} </button>
    </div>
  ) : (
   window.location.pathname = "/login"
  );
}
