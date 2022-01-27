import { useEffect, useState } from "react";
import SelectLocation from "./SelectLocation";

function EditProfileContent({userId, professions, locations}) {

    const [userData, setUserData] = useState(null);

    const [updatedUserData, setUpdatedUserData] = useState(null)

    useEffect(()=>{
        async function getUserData() {
            if (userId != null) {
                const response = await fetch(`/user/${userId}`)
                const data = await response.json();
                setUserData(data);
                setUpdatedUserData(data);
            }   
        }
        getUserData();
    }, [userId])


    function getLocationById(id) {
        const location = locations.find(location => location.id === id)
        return {id: id, name: location.name}
    }

    function updateHomeLocation(target) {
        const id = parseInt(target.value)
        setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, location:getLocationById(id)}})
    }

    function updateWorkLocation(target) {
        const id = parseInt(target.value);
        const index = parseInt(target.dataset.index);

        const chosenLocation = getLocationById(id)
        const newLocations = updatedUserData.expertInfo.locations;
        newLocations[index] = chosenLocation;

        setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, locations:newLocations}})
    }



    return (
        <div className="content-container simple-content-container edit-profile-content">
            <h1>Edit Page</h1>
            
            {updatedUserData &&
            <>
            <h5>{JSON.stringify(updatedUserData.personalInfo)}</h5>
                <form>
                    <h2>Personal Info</h2>
                    <label>
                        <p>Name</p>
                        <input type="text" placeholder={updatedUserData.personalInfo.name} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, name: e.target.value}})
                        }}></input>
                    </label>
                    <label>
                        <p>Username</p>
                        <input type="text" placeholder={updatedUserData.personalInfo.username} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, username: e.target.value}})
                        }}></input>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="email" placeholder={updatedUserData.personalInfo.email} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, email: e.target.value}})
                        }}></input>
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input type="text" placeholder={updatedUserData.personalInfo.phoneNumber} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, phoneNumber: e.target.value}})
                        }}></input>
                    </label>
                    <label>
                        <p>Profile Picture Url</p>
                        <input type="text" placeholder={updatedUserData.personalInfo.profilePicture} onChange={e => {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, profilePicture: e.target.value}})
                        }}></input>
                    </label>
                    <SelectLocation firstValue={updatedUserData.personalInfo.location.id} locations={locations} updateLocation={updateHomeLocation}/>
                </form>
                <h5>{JSON.stringify(updatedUserData.expertInfo)}</h5>
                {updatedUserData.expertInfo &&
                <>
                    <form>
                    <h2>Expert Info</h2>
                    <label>
                        <p>Description</p>
                        <textarea defaultValue={updatedUserData.expertInfo.description} onChange={e => {
                            setUpdatedUserData({...updatedUserData, expertInfo:{...updatedUserData.expertInfo, description:e.target.value}})
                        }}></textarea>
                    </label>
                    <h2>Locations</h2>
                        {updatedUserData.expertInfo.locations.map((location,idx) => <SelectLocation key={location.id} index={idx} firstValue={updatedUserData.expertInfo.locations[idx].id} updateLocation={updateWorkLocation} locations={locations}/>)}
                    <h2>Professions</h2>
                    <h2>Services</h2>
                    <h2>References</h2>
                    

                    </form>
                </>
            }
            </>
}
        </div>
    )
}

export default EditProfileContent;
