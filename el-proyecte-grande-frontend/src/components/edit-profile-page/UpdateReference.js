function UpdateReference({reference, index, updatedUserData, setUpdatedUserData}) {


    const references = updatedUserData.expertInfo.references;

    function deleteReference() {
        let references = updatedUserData.expertInfo.references;
        references.splice(index, 1);
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, references:references}})
        }
    
    function updateReferenceDescription(description) {
        references[index].description=description;
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, references:references}})
    }

    function updateServiceImagePath(imagePath) {
        references[index].imagePath=imagePath;
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, references:references}})
    }

    return (
        <div>
            <label htmlFor="name" className={"form-label"}>Reference {index + 1} Description</label><br/>
            <input className={"form-input"} type="text" defaultValue={reference.description} required onChange={(e)=>{updateReferenceDescription(e.target.value)}}></input>
            <label htmlFor="description" className={"form-label"}>Image Path</label><br/>
            <input className={"form-input"} type="text" defaultValue={reference.imagePath} required onChange={(e)=>{updateServiceImagePath(e.target.value)}}></input>
            {references.length > 1 && <button type="button" onClick={()=>{deleteReference()}}>Remove Reference</button>}
        </div>
    )
}

export default UpdateReference;