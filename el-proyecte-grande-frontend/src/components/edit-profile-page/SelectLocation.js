function SelectLocation({firstValue, updatedUserData, setUpdatedUserData, locations}) {


    function getLocationById(id) {
        const intId = parseInt(id)
        const location = locations.find(location => location.id === intId)
        return {id: intId, name: location.name}
    }

    return(
        <label>
        <p>Location</p>
        
        <select id="home-locations" defaultValue={firstValue} onChange={(e)=> {
            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, location:getLocationById(e.target.value)}})
        }}>
            {locations && 
                locations.map(location => {return <option key={location.id} value={location.id}>{location.name}</option>})
            }
        </select>
    </label>
    )
}

export default SelectLocation;
