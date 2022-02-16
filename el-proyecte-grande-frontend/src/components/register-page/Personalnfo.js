import { useEffect, useState } from "react";
import Login from '../register-page/Login.css'

const initialFormData = Object.freeze({
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    location: 0

})

const Personalnfo = ({locations}) => {
    
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //submit to API
    }

    return (
    <div className={"content-container"}>
        <div className={"personal-info-container"}>
            
                <form>
                    <h1 className="{form-title}">Welcome!</h1>
                    <label htmlFor={"email"} className={"form-label"}>Email</label><br/>
                    <input className={"form-input"} id="email" name="email" type="text" placeholder="john.doe@example.com" onChange={handleChange}/><br/>
                    <label htmlFor="username" className={"form-label"}>Username</label><br/>
                    <input className={"form-input"} id="username" name="username" type="text" placeholder="john.doe" onChange={handleChange}/><br/>
                    <label htmlFor="password" className={"form-label"}>Password</label><br/>
                    <input className={"form-input"} id="password" name="password" type="password" onChange={handleChange}></input ><br/>
                    <label htmlFor="confirm-password" className={"form-label"}>Confirm password</label><br/>
                    <input className={"form-input"} id="confirm-password" name="confirm-password" type="password"/><br/>

                    <label htmlFor="phone-number" className={"form-label"}>Phone number</label><br/>
                    <input className={"form-input"} id="phoneNumber" name="phoneNumber" type="text" onChange={handleChange}></input><br/>
                        
                    <label htmlFor="location" className={"form-label"}>Location</label><br/>
                    <select name='location' value={""} className={"form-select"} onChange={handleChange}>
                    <option value="">Location</option>
                        {locations.map((location) => (
                            <option key={location.id} value={location.id} name="location">{location.name}</option>
                        ))}
                    </select>

                    <button onClick={handleSubmit} className={"submit"} >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Personalnfo
