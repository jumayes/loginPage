import {Routes , Route} from "react-router-dom"
import "./frebase";
import LoginPage from "./page/loginPage";
import RegisterPage from "./page/registerPage";
import HomePage from "./page/homePage"

export default function App() {
  return (
    <Routes>
      <Route exact path="/" Component={HomePage}/>
      <Route exact path="/login" Component={LoginPage}/>
      <Route exact path="/register" Component={RegisterPage}/>
      <Route exact path="*" Component={HomePage} />
    </Routes>
  );
};
