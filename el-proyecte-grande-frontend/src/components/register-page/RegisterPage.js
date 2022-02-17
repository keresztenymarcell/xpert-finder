import { useContext, useEffect, useState } from "react";
import Login from '../register-page/Login.css'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import  { useNavigate } from 'react-router-dom';
import { LocationsContext } from "../App";




const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required() ,
    name: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    phoneNumber: yup.number().required(),
    locationId: yup.number().required()

})

const RegisterPage = () => {

    const locations = useContext(LocationsContext);

    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {
        console.log(JSON.stringify(data))
        const response = await fetch("/user/register", {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(data)
        })
        if(response.status == 400){
            window.alert("Username already used, choose something else!")
        }
        else if(response.status == 200){
            navigate('/login');
        }
    }

    return (
    <div className={"content-container"}>
        <div className={"personal-info-container"}>
        
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="{form-title}">Welcome!</h1>
                    <label htmlFor={"email"} className={"form-label"}>Email</label><br/>
                    <input className={"form-input"} 
                        id="email" 
                        name="email" 
                        type="text" 
                        placeholder="john.doe@example.com" 
                        {...register("email")}/><br/>
                        {errors.email && <p className="form-validation" >{"Please enter a valid email"}</p>}
                        
                        
                    <label htmlFor="username" className={"form-label"}>Username</label><br/>
                    <input className={"form-input"} 
                        id="username" 
                        name="username" 
                        type="text" 
                        placeholder="johndoe" 
                        {...register("username")}/><br/>
                        
                    {errors.username && <p className="form-validation">{"Username is required"}</p>}

                    <label htmlFor="name" className={"form-label"}>Full name</label><br/>
                    <input className={"form-input"} 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="John Doe" 
                        {...register("name")}/><br/>
                        
                    {errors.name && <p className="form-validation">{"Full name is required"}</p>}
                    
                    <label htmlFor="password" className={"form-label"}>Password</label><br/>
                    <input className={"form-input"} 
                        id="password" 
                        name="password" 
                        type="password"
                        placeholder="********"
                        {...register("password")}
                    /><br/>
                    {errors.password && <p className="form-validation">{"Password is required"}</p>}
                    
                    <label htmlFor="confirm-password" className={"form-label"}>Confirm password</label><br/>
                    <input className={"form-input"} 
                        id="confirm-password" 
                        name="confirmPassword" 
                        type="password"
                        placeholder="********" 
                        {...register("confirmPassword")}
                    /><br/>
                    {errors.confirmPassword && <p className="form-validation">{"Passwords should match"}</p>}

                    <label htmlFor="phone-number" className={"form-label"}>Phone number</label><br/>
                    <input className={"form-input"} 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        type="text"
                        placeholder="06309862344"
                        {...register("phoneNumber")}
                    /><br/>
                    {errors.confirmPassword && <p className="form-validation">{"Phone number is required"}</p>}
                        
                    <label htmlFor="location" className={"form-label"}>Location</label><br/>
                    <select name='locationId' className={"form-select"} {...register("locationId")}>
                        {locations.map((location) => (
                            <option key={location.id} value={location.id} name="location">{location.name}</option>
                        ))}
                    </select>
                    {errors.locationId && <p className="form-validation">{"Location is required"}</p>}

                    <button onClick={handleSubmit} className={"submit"} >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
