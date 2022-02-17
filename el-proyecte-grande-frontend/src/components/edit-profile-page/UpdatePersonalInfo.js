import SelectLocation from "./SelectLocation";
import { LocationsContext } from "../App";
import { useContext } from "react";

function UpdatePersonalInfo({updatedUserData, setUpdatedUserData, getLocationById}) {

    const locations = useContext(LocationsContext);

    function updateHomeLocation(target) {
        const id = parseInt(target.value)
        setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, location:getLocationById(id)}})
    }

    return(
        <form>
                    <h2 className="form-title">Personal Info</h2>
                    <label className="form-label">
                        <p>Name</p>
                        <input className="form-input" type="text" value={updatedUserData.personalInfo.name} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, name: e.target.value}})
                        }}></input>
                    </label>
                    <label className="form-label">
                        <p>Username</p>
                        <input className="form-input" type="text" value={updatedUserData.personalInfo.username} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, username: e.target.value}})
                        }}></input>
                    </label>
                    <label className="form-label">
                        <p>Email</p>
                        <input className="form-input" type="email" value={updatedUserData.personalInfo.email} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, email: e.target.value}})
                        }}></input>
                    </label>
                    <label className="form-label">
                        <p>Phone Number</p>
                        <input className="form-input" type="text" value={updatedUserData.personalInfo.phoneNumber} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, phoneNumber: e.target.value}})
                        }}></input>
                    </label>
                    <label className="form-label">
                        <p>Profile Picture Url</p>
                        <input className="form-input" type="text" value={updatedUserData.personalInfo.profilePicture} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, profilePicture: e.target.value}})
                        }}></input>
                    </label>
                    <SelectLocation firstValue={updatedUserData.personalInfo.location.id} locations={locations} updateLocation={updateHomeLocation}/>
                </form>
    )
    
}

export default UpdatePersonalInfo;