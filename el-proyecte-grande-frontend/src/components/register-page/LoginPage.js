

import { useEffect, useState } from "react";
import React from 'react'
import Login from '../register-page/Login.css'

const LoginPage = () => {

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
        window.localStorage.setItem("username", data.username);
      }


    const handleSubmit = (e) => {
        e.preventDefault()
        login();
    }

    return (

        <div className={"content-container"}>
        <div className={"personal-info-container"}>
        <div>
            <form>
                <label htmlFor={"username"} className={"form-label"}>Username</label><br/>
                <input className={"form-input"} id="username" name="username" type="text" placeholder="johndoe" required onChange={e => {setUsername(e.target.value)}}/><br/>
                <label htmlFor={"password"} className={"form-label"}>Password</label><br/>
                <input className={"form-input"} id="password" name="password" type="text" required onChange={e => {setPassword(e.target.value)}}/><br/>
                <button onClick={handleSubmit} className={"submit"} >Submit</button>
            </form>
            
        </div>
        </div>
        </div>
    )
}

export default LoginPage
