import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import UserService from "../service/UserService";
import UpdateExpertInfo from "./UpdateExpertInfo";
import { LocationsContext, UserContext } from "../App";
import UpdatePersonalInfo from "./UpdatePersonalInfo";

function EditProfileContent() {

    const user = useContext(UserContext);
    const locations = useContext(LocationsContext);
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

    return (
        <div className="content-container simple-content-container edit-profile-content">
            <h1>Edit Page</h1>
            
            {updatedUserData &&       
            <>
            <UpdatePersonalInfo updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} getLocationById={getLocationById} />                
            <UpdateExpertInfo updatedUserData={updatedUserData} setUpdatedUserData={setUpdatedUserData} getLocationById={getLocationById} />
            <button className={"submit"} onClick={()=> {handleSubmit()}}>Save Changes</button>
            </>
}
        </div>
    )
}

export default EditProfileContent;
