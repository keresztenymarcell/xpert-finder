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
        <div className="content-container">
            <h1>Edit Page</h1>
            <form>

            </form>
            <form>

            </form>
        </div>
    )
}

export default EditProfileContent;
