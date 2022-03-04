import { useContext, useEffect, useState } from "react";
import SelectLocationContainer from "./SelectLocationContainer";
import SelectProfessionContainer from "./SelectProfessionContainer";
import UpdateReferencesContainer from "./UpdateReferencesContainer";
import UpdateServicesContainer from "./UpdateServicesContainer";
import { ProfessionsContext, LocationsContext } from "../App";
import Checkbox from '@mui/material/Checkbox';

function UpdateExpertInfo({updatedUserData, setUpdatedUserData, getLocationById}) {

    const professions = useContext(ProfessionsContext);
    const locations = useContext(LocationsContext);
    const [isChecked, setIsChecked] = useState(false);

    const defaultExpertInfo = {
        id: null,
        description: "Introduce yourself here",
        rating: null,
        jobCount: 0,
        references: [
            {
                description: "Describe one of your reference works",
                imagePath: "Paste the URL of a picture"
            }
        ],
        services: [
            {
                name: "Give the name of your service here",
                description: "Describe your service here",
                price: "Give a price for your service here"
            }
        ],
        locations: [
            locations[0]
        ],
        professions: [
            professions[0]
        ]

    }

    useEffect(() => {
        async function createNewExpertInfo() {
            if (isChecked) {
                setUpdatedUserData({...updatedUserData, expertInfo:defaultExpertInfo})
            }
        }
        createNewExpertInfo()
        
    }, [isChecked])

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
        return profession;
    }

    
    return (
        <>
        
        {updatedUserData.expertInfo ?
                
                    <div className="edit-expert-info-container">
                    <form>
                    <h2 className="form-title">Expert Info</h2>
                    <label className="form-label">
                        <p>Description</p>
                        <textarea defaultValue={updatedUserData.expertInfo.description} onChange={e => {
                            setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, description:e.target.value}})
                        }}></textarea>

                    </label>
                        <SelectLocationContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} updateLocation={updateWorkLocation} />
                        <SelectProfessionContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} updateProfession={updateProfession} />
                    
                        <UpdateServicesContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
                        <UpdateReferencesContainer updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} />
                    
                    
                    </form>
                    </div>
                
        :
        <>
        <Checkbox onChange={()=> setIsChecked(!isChecked)} ></Checkbox>
        <label htmlFor="expert">I want to be an expert</label>
        </>
        }
        </>
    )
}

export default UpdateExpertInfo;
