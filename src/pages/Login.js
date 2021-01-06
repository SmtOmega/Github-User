import loginImg from "../images/login-img.svg";
import {useAuth0} from '@auth0/auth0-react'

const Login = () => {
    const {loginWithRedirect} = useAuth0()
  return (
    <div className="login-container">
      <img src={loginImg} alt="github user" />
      <h1>Github User</h1>
      <button onClick={loginWithRedirect}>login / Sign-Up</button>
    </div>
  );
};

export default Login;
