import { useState } from "react";

function AddNewReference({updatedUserData, setUpdatedUserData}) {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [imagePath, setImagePath] = useState("");

    function addReference() {
        const newReference = {
            description: description,
            imagePath: imagePath,
            id: Date.now()
        }
        let references = updatedUserData.expertInfo.references;
        references.push(newReference);
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, references:references}})
        setIsOpen(false)
    }

    return(

            (isOpen) ? 
            <>
                <label htmlFor="description" className={"form-label"}>Reference Description</label><br/>
                <input className={"form-input"} type="text" required onChange={(e)=>{setDescription(e.target.value)}}></input>
                <label htmlFor="imagePath" className={"form-label"}>Image Path</label><br/>
                <input className={"form-input"} type="text" required onChange={(e)=>{setImagePath(e.target.value)}}></input>
                <button type="button" onClick={(e)=>{addReference()}}>Add Reference</button>
            </>
            :
            <button className={"submit"} type="button" onClick={()=> setIsOpen(true)} >Add</button>

    )
}

export default AddNewReference;