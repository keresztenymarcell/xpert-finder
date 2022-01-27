import SelectLocation from "./SelectLocation";

function SelectLocationContainer({updatedUserData, updateLocation, locations}) {
    return(
        <>
        {updatedUserData.expertInfo.locations.map((location,idx) =>
        <SelectLocation key={location.id} index={idx} firstValue={updatedUserData.expertInfo.locations[idx].id} updateLocation={updateLocation} locations={locations}/>)}
        <button type="button" onClick={console.log("woohoo")}>Remove</button>
        <button type="button">Add</button>
        
        </>
    )
    
}
export default SelectLocationContainer;
