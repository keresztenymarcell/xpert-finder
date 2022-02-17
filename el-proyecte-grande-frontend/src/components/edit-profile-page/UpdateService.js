function UpdateService({service, index, updatedUserData, setUpdatedUserData}) {


    const services = updatedUserData.expertInfo.services;

    function deleteService() {
        let services = updatedUserData.expertInfo.services;
        services.splice(index, 1);
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, services:services}})
        }
    
        
    

    function updateServiceName(name) {
        services[index].name=name;
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, services:services}})
    }

    function updateServiceDescription(description) {
        services[index].description=description;
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, services:services}})
    }

    function updateServicePrice(price) {
        services[index].price=price;
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, services:services}})
    }

    return (
        <form>
        <label htmlFor="name" className={"form-label"}>Service {index + 1} Name</label><br/>
        <input className={"form-input"} type="text" defaultValue={service.name} onChange={(e)=>{updateServiceName(e.target.value)}}></input>
        <label htmlFor="description" className={"form-label"}>Description</label><br/>
        <textarea className={"form-input"} defaultValue={service.description} onChange={(e)=>{updateServiceDescription(e.target.value)}}></textarea>
        <label htmlFor="price" className={"form-label"}>Price</label><br/>
        <input className={"form-input"} type="text" defaultValue={service.price} onChange={(e)=>{updateServicePrice(e.target.value)}}></input>
        <button type="button" value={service.id} onClick={(e)=>{deleteService()}}>Remove</button>
        </form>
    )
}

export default UpdateService;