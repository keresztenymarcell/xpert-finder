import AddNewReference from "./AddNewReference";
import UpdateReference from "./UpdateReference";

function UpdateReferencesContainer({updatedUserData, setUpdatedUserData}) {



    return (
        <>
        {updatedUserData.expertInfo.references.map((reference,idx) =>
        <UpdateReference key={"reference" + idx + reference.name} reference={reference} index={idx} updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />)}
    
        <AddNewReference updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
        </>
    )
}

export default UpdateReferencesContainer;