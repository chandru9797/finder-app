import "./login.css";
import {  useNavigate} from 'react-router-dom'
import { useState } from "react";
import { UserAuth } from "../context/Authcontact";
import { Link } from "react-router-dom";

export default function Login() {

  const {createUser} = UserAuth()
  const [ email , setEmail] = useState("")
  const [ password , setPassword] = useState("")
  const[error , setError] = useState("")

  const navigate = useNavigate()
  
  const message = "email invalid"

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError('')
    try{
      await createUser(email , password)
      navigate('/profile')
    } catch(e){
      // setError(e.message)
      alert(message)
    }
     
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FindEr</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on FindEr.
          </span>
        </div>
        <form className="loginRight"  onSubmit={handleSubmit} >
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" className="loginInput" onChange={(e) => setPassword(e.target.value)}/>
            <button className="loginButton" >
              <span className="loginname">Log In</span>
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}