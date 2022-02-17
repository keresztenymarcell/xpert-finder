import SelectLocationContainer from "./SelectLocationContainer";
import SelectProfessionContainer from "./SelectProfessionContainer";
import UpdateReferencesContainer from "./UpdateReferencesContainer";
import UpdateServicesContainer from "./UpdateServicesContainer";

function UpdateExpertInfo(updatedUserData, setUpdatedUserData, locations, professions, getLocationById) {

    function updateWorkLocation(target) {
        const id = parseInt(target.value);
        const index = parseInt(target.dataset.index);
        const chosenLocation = getLocationById(id);

        let newLocations = updatedUserData.expertInfo.locations;

        if (!isItemAlreadyInArray(chosenLocation, newLocations)) {
            newLocations[index] = chosenLocation;
        } else {
            newLocations.splice(index, 1)
        }
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, locations:newLocations}})
        
    }

    function updateProfession(target) {
        const id = parseInt(target.value);
        const index = parseInt(target.dataset.index);
        const chosenProfession = getProfessionById(id);

        let newProfessions = updatedUserData.expertInfo.professions;

        if (!isItemAlreadyInArray(chosenProfession, newProfessions)) {
            newProfessions[index] = chosenProfession;
        } else {
            newProfessions.splice(index, 1)
        }
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, professions:newProfessions}})
        
    }

    function isItemAlreadyInArray(item, array) {
        return array.map(item => item.id).includes(item.id)
    }

    function getProfessionById(id) {
        const profession = professions.find(profession => profession.id === id)
        console.log(profession)
        return profession;
    }
    
    return (
        <>
        {updatedUserData.expertInfo &&
                    <form>
                    <h2 className="form-title">Expert Info</h2>
                    <label className="form-label">
                        <p>Description</p>
                        <textarea defaultValue={updatedUserData.expertInfo.description} onChange={e => {
                            setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, description:e.target.value}})
                        }}></textarea>
                    </label>
                    <h2>Locations</h2>
                    <h5>{JSON.stringify(updatedUserData.expertInfo.locations)}</h5>
                    <SelectLocationContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} updateLocation={updateWorkLocation} locations={locations} />
                        
                    <h2>Professions</h2>
                    <h5>{JSON.stringify(updatedUserData.expertInfo.professions)}</h5>
                    <SelectProfessionContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} updateProfession={updateProfession} professions={professions} />
                    <h2>Services</h2>
                    <UpdateServicesContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
                    <h2>References</h2>
                    <UpdateReferencesContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
                    
                    </form>
            }
        </>
    )
}

export default UpdateExpertInfo;