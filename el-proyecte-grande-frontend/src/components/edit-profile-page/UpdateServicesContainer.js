import AddNewService from "./AddNewService";
import UpdateService from "./UpdateService";

function UpdateServicesContainer({updatedUserData, setUpdatedUserData}) {

    return (
        <>
        <h2>Services</h2>
        <h4>{JSON.stringify(updatedUserData.expertInfo.services)}</h4>
        {updatedUserData.expertInfo.services.map((service,idx) =>
        <UpdateService key={"service" + service.id} service={service} index={idx} updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />)}
    
        <AddNewService updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
        </>
    )
}

export default UpdateServicesContainer;