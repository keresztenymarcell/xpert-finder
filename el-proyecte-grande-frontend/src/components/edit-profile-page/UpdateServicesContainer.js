import AddNewService from "./AddNewService";
import UpdateService from "./UpdateService";

function UpdateServicesContainer({updatedUserData, setUpdatedUserData}) {



    return (
        <>
            <p>{JSON.stringify(updatedUserData.expertInfo.services)}</p>
            {updatedUserData.expertInfo.services.map((service,idx) =>
        <UpdateService service={service} index={idx} updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />)}
        {updatedUserData.expertInfo.services.length > 1 && <button className={"submit"} type="button" onClick={() => console.log('hi')}>Remove</button>}
        <AddNewService updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
        </>
    )
}

export default UpdateServicesContainer;