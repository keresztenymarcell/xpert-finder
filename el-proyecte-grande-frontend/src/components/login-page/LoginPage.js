import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import React from 'react'
import Login from '../register-page/Login.css'
import { alignProperty } from "@mui/material/styles/cssUtils";

const LoginPage = ({setUser}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const apiURL = '/login'


    const login = async () => {

        const response = await fetch(apiURL, {
          method: 'POST',
          body: new URLSearchParams({
            username: username,
            password: password
          })
        })

        const data = await response.json();
        window.localStorage.setItem("access_token", data.access_token);
        window.localStorage.setItem("refresh_token", data.refresh_token);
        setUser(data.username);
      }


    const handleSubmit = (e) => {
        e.preventDefault()
        login();
    }

    return (

        <div className={"content-container"}>
          <div className={"personal-info-container"}>
            <div>
              <h1>Please sign in to your account</h1>
              <form>
                <label htmlFor={"username"} className={"form-label"}>Username:</label><br/>
                <input className={"form-input"} id="username" name="username" type="text" placeholder="johndoe" required onChange={e => {setUsername(e.target.value)}}/><br/>
                <label htmlFor={"password"} className={"form-label"}>Password:</label><br/>
                <input className={"form-input"} id="password" name="password" type="password" placeholder="********" required onChange={e => {setPassword(e.target.value)}}/><br/>

                <div className={"login-plus-items"}>
                  <p className={"forgot-password"} >Forgot your password?</p>
                  <Link to="/register" ><p className={"register-here"}><ul>Register here </ul></p> </Link>
                </div>
                
                <button onClick={handleSubmit} className={"submit"} >Sign in</button>
            </form>
            </div>
          </div>
        </div>
    )
}

export default LoginPage
