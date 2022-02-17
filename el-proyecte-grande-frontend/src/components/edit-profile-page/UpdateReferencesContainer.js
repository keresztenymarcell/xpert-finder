import AddNewReference from "./AddNewReference";
import UpdateReference from "./UpdateReference";

function UpdateReferencesContainer({updatedUserData, setUpdatedUserData}) {



    return (
        <>
            <p>{JSON.stringify(updatedUserData.expertInfo.references)}</p>
            {updatedUserData.expertInfo.references.map((reference,idx) =>
        <UpdateReference key={"referecne" + idx + reference.name} reference={reference} index={idx} updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />)}
    
        <AddNewReference updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
        </>
    )
}

export default UpdateReferencesContainer;