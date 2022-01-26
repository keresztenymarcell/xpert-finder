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

    return (
        <div className="content-container simple-content-container">
            <h1>Edit Page</h1>
            {userData &&
            <>
                <form>
                    <h2>Personal Info</h2>
                    <label>
                        <p>Name</p>
                        <input type="text" placeholder={userData.personalInfo.name}></input>
                    </label>
                    
                </form>
                <form>

                </form>
            </>
}
        </div>
    )
}

export default EditProfileContent;
