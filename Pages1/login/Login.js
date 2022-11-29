
import "./login.css";
import {Outlet , Link} from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FindEr</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on FindEr.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">
              <Link to = '/'>Log In</Link>
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}