import SelectLocation from "./SelectLocation";
import AddNewLocation from "./AddNewLocation";
import { LocationsContext } from "../App";
import { useContext } from "react";

function SelectLocationContainer({updatedUserData, setUpdatedUserData, updateLocation}) {

    const locations = useContext(LocationsContext);
    const expertInfoLocations = updatedUserData.expertInfo.locations;

    function removeLocation() {
        const newLocations = updatedUserData.expertInfo.locations;
        newLocations.pop()
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, locations:newLocations}})
    }

    function getRemainingLocations() {
        const alreadySelectedLocations = updatedUserData.expertInfo.locations;
        const alreadySelectedLocationsIndeces = alreadySelectedLocations.map(location => location.id);
        const remainingLocations = locations.filter(location => !alreadySelectedLocationsIndeces.includes(location.id))
        return remainingLocations;
    }

    return(
        <>
        <h2>Locations</h2>
        {expertInfoLocations.map((location,idx) =>
        <SelectLocation key={location.id} index={idx} firstValue={updatedUserData.expertInfo.locations[idx].id} updateLocation={updateLocation} locations={locations}/>)}
        {expertInfoLocations.length > 1 && <button className={"submit"} type="button" onClick={() => removeLocation()}>Remove</button>}
        <AddNewLocation updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} locations={locations} remainingLocations={getRemainingLocations()} />
        </>
    )
    
}
export default SelectLocationContainer;
