import { useState } from "react";
import SelectLocation from "./SelectLocation";

function AddNewLocation({remainingLocations, updatedUserData, setUpdatedUserData}) {


    const [isOpen, setIsOpen] = useState(false);


    function addNewWorkLocation(target) {
        const newLocationId = target.value;
        remainingLocations.filter(location => location.id === newLocationId);
        const newLocation = remainingLocations[0];
        let chosenLocations = updatedUserData.expertInfo.locations;
        chosenLocations.push(newLocation);
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, locations:chosenLocations}});
        setIsOpen(false);
    }

    return(

            (isOpen) ? 
            <SelectLocation updateLocation={addNewWorkLocation} locations={remainingLocations} hasChooseHeader={true} />
            :
            <button className={"submit"} type="button" onClick={()=> setIsOpen(true)} >Add</button>

    )
    
}

export default AddNewLocation;