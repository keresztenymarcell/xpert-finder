import { useState } from "react";

function SelectLocation({firstValue, index, locations, updateLocation, hasChooseHeader}) {

    return(
        <label>
        {index ? <p>Location {index + 1}</p> : <p>Location</p>}
        
        <select className={"form-select"} defaultValue={firstValue} data-index={index} onChange={(e)=> {updateLocation(e.target)}}>
            {hasChooseHeader && <option value="">Choose a Location:</option>}
            {locations && 
                locations.map(location => {return <option key={location.id} value={location.id}>{location.name}</option>})
            }
        </select>
    </label>
    )
}

export default SelectLocation;
