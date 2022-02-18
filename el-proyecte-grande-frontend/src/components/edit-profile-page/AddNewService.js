import { useState } from "react";

function AddNewService({updatedUserData, setUpdatedUserData}) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function addService() {
        const newService = {
            name: name,
            description: description,
            price: price,
            id: Date.now()
        }
        let services = updatedUserData.expertInfo.services;
        services.push(newService);
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, services:services}})
        setIsOpen(false)
    }

    return(

            (isOpen) ? 
            <>
                <label htmlFor="name" className={"form-label"}>Service Name</label><br/>
                <input className={"form-input"} type="text" required onChange={(e)=>{setName(e.target.value)}}></input>
                <label htmlFor="description" className={"form-label"}>Description</label><br/>
                <textarea className={"form-input"} required onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                <label htmlFor="price" className={"form-label"}>Price</label><br/>
                <input className={"form-input"} type="text" required onChange={(e)=>{setPrice(e.target.value)}}></input>
                <button type="button" onClick={(e)=>{addService()}}>Add Service</button>
            </>
            :
            <button className={"submit"} type="button" onClick={()=> setIsOpen(true)} >Add</button>

    )
}

export default AddNewService;