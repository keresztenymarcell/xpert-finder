import AddNewService from "./AddNewService";
import UpdateService from "./UpdateService";

function UpdateServicesContainer({updatedUserData, setUpdatedUserData}) {

    return (
        <>
        {updatedUserData.expertInfo.services.map((service,idx) =>
        <UpdateService key={"service" + idx + service.name} service={service} index={idx} updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />)}
    
        <AddNewService updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
        </>
    )
}

export default UpdateServicesContainer;