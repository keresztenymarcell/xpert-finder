import { useEffect, useState } from "react";

function EditProfileContent({userId, professions, locations}) {

    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        async function getUserData() {
            if (userId != null) {
                const response = await fetch(`/user/${userId}`)
                const data = await response.json();
                setUserData(data);
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
            <h5>{JSON.stringify(userData)}</h5>
            {userData &&
            <>
                <form>
                    <h2>Personal Info</h2>
                    <label>
                        <p>Name</p>
                        <input type="text" placeholder={userData.personalInfo.name}></input>
                    </label>
                    <label>
                        <p>Username</p>
                        <input type="text" placeholder={userData.personalInfo.username}></input>
                    </label>
                    <label>
                        <p>Email</p>
                        <input type="email" placeholder={userData.personalInfo.email}></input>
                    </label>
                    <label>
                        <p>Phone Number</p>
                        <input type="text" placeholder={userData.personalInfo.phoneNumber}></input>
                    </label>
                    <label>
                        <p>Profile Picture Url</p>
                        <input type="text" placeholder={userData.personalInfo.profilePicture}></input>
                    </label>
                    <label>
                        <p>Location</p>
                        
                        <select id="home-locations" defaultValue={userData.personalInfo.location.id} onChange={(e)=> {
                            setUserData({...userData, personalInfo:{...userData.personalInfo, location:getLocationById(e.target.value)}})
                        }}>
                            {locations && 
                                locations.map(location => {return <option key={location.id} value={location.id}>{location.name}</option>})
                            }
                        </select>
                    </label>
                </form>
                {userData.expertInfo &&
                <>
                    <form>
                    <h2>Expert Info</h2>
                    <label>
                        <p>Description</p>
                        <textarea placeholder={userData.expertInfo.description}></textarea>
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
