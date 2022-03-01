import AddNewReference from "./AddNewReference";
import UpdateReference from "./UpdateReference";

function UpdateReferencesContainer({updatedUserData, setUpdatedUserData}) {



    return (
        <>
        <h2>References</h2>
        {updatedUserData.expertInfo.references.map((reference,idx) =>
        <UpdateReference key={"reference" + reference.id} reference={reference} index={idx} updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />)}
    
        <AddNewReference updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
        </>
    )
}

export default UpdateReferencesContainer;
