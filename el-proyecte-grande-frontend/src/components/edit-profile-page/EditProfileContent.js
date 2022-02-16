import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import SelectLocation from "./SelectLocation";
import SelectLocationContainer from "./SelectLocationContainer";
import SelectProfessionContainer from "./SelectProfessionContainer";
import UpdateServicesContainer from "./UpdateServicesContainer";
import {Login} from "../register-page/Login.css"
import UserService from "../service/UserService";

function EditProfileContent({user, professions, locations}) {

    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [updatedUserData, setUpdatedUserData] = useState(null)

    useEffect(()=>{
        async function getUserData() {
            if (user != null) {
                const response = await UserService.getFetchWithHeader(`/user/username/${user}`);
                const data = await response.json();
                setUserData(data);
                setUpdatedUserData(data);
            }   
        }
        getUserData();
    }, [user])


    function handleSubmit() {
        sendUpdatedDataToBackend()
        navigate("/");
    }


    async function sendUpdatedDataToBackend() {
        await UserService.postFetchWithHeader(`user/edit`, JSON.stringify(updatedUserData));
    }

    function getLocationById(id) {
        const location = locations.find(location => location.id === id)
        return location;
    }

    function getProfessionById(id) {
        const profession = professions.find(profession => profession.id === id)
        console.log(profession)
        return profession;
    }

    function updateHomeLocation(target) {
        const id = parseInt(target.value)
        setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, location:getLocationById(id)}})
    }

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

    return (
        <div className="content-container simple-content-container edit-profile-content">
            <h1>Edit Page</h1>
            
            {updatedUserData &&
            
            <>
            <h5>{JSON.stringify(updatedUserData.personalInfo)}</h5>
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
                
                {updatedUserData.expertInfo &&
                <>
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
                    
                    </form>
                </>
            }
            <button className={"submit"} onClick={()=> {handleSubmit()}}>Save Changes</button>
            </>
}
        </div>
    )
}

export default EditProfileContent;
