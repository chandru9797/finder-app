import React from 'react'
import {Outlet,Link} from 'react-router-dom';

function Layout1() {

    
  return (
    <>
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
          <button className="loginButton" onClick={loggedIn}>
            <Link to = '/profile'>Log In</Link>
          </button>
          <span className="loginForgot">Forgot Password?</span>
          <button className="loginRegisterButton">
            Create a New Account
          </button>
        </div>
      </div>
    </div>
  </div>
  <Outlet></Outlet>
    </>
  )
}

export default Layout1