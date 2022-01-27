import SelectLocation from "./SelectLocation";

function SelectLocationContainer({updatedUserData, setUpdatedUserData, updateLocation, locations}) {

    console.log(updatedUserData.expertInfo.locations);


    const expertInfoLocations = updatedUserData.expertInfo.locations;


    function removeLocation() {
        const newLocations = updatedUserData.expertInfo.locations;
        newLocations.pop()
        console.log(newLocations);
        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo.locations, locations:newLocations}})
    }


    return(
        <>
        {expertInfoLocations.map((location,idx) =>
        <SelectLocation key={location.id} index={idx} firstValue={updatedUserData.expertInfo.locations[idx].id} updateLocation={updateLocation} locations={locations}/>)}
        {expertInfoLocations.length > 1 && <button type="button" onClick={() => removeLocation()}>Remove</button>}
        <button type="button">Add</button>
        
        </>
    )
    
}
export default SelectLocationContainer;
