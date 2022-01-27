import { useEffect, useState } from "react";

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
        const intId = parseInt(id)
        const location = locations.find(location => location.id === intId)
        return {id: intId, name: location.name}
    }

    return (
        <div className="content-container simple-content-container">
            <h1>Edit Page</h1>
            <h5>{JSON.stringify(updatedUserData)}</h5>
            {updatedUserData &&
            <>
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
                    <label>
                        <p>Location</p>
                        
                        <select id="home-locations" defaultValue={updatedUserData.personalInfo.location.id} onChange={(e)=> {
                            setUpdatedUserData({...updatedUserData, personalInfo:{...updatedUserData.personalInfo, location:getLocationById(e.target.value)}})
                        }}>
                            {locations && 
                                locations.map(location => {return <option key={location.id} value={location.id}>{location.name}</option>})
                            }
                        </select>
                    </label>
                </form>
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
                    

                    </form>
                </>
            }
            </>
}
        </div>
    )
}

export default EditProfileContent;
