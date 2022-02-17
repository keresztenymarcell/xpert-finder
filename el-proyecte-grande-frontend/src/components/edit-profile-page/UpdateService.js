function UpdateService({service, index, updatedUserData, setUpdatedUserData}) {


    function deleteService(deleteIdString) {
        const deleteId = parseInt(deleteIdString);
        let services = updatedUserData.expertInfo.services;
        const remainingServices = services.filter(service => service.id !== deleteId)
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, services:remainingServices}})
    }

    return (
        
        <form>
        <label htmlFor="name" className={"form-label"}>Service {index + 1} Name</label><br/>
        <input className={"form-input"} type="text" defaultValue={service.name}></input>
        <label htmlFor="description" className={"form-label"}>Description</label><br/>
        <textarea className={"form-input"} defaultValue={service.description}></textarea>
        <label htmlFor="price" className={"form-label"}>Price</label><br/>
        <input className={"form-input"} type="text" defaultValue={service.price}></input>
        <button type="button" value={service.id} onClick={(e)=>{deleteService(e.target.value)}}>Remove</button>
        </form>
    )
}

export default UpdateService;