import { useParams } from "react-router-dom";
import Service from './Service';
import Review from './Review';
import Reference from './Reference';
import {useEffect, useState} from 'react';
import ProfessionTag from './ProfessionTag';
import DoneIcon from '@mui/icons-material/Done';
import Rating from '@mui/material/Rating';
import ReferencesContainer from './ReferencesContainer';
import ReviewContainer from './ReviewContainer';



function ProfilePageContent({profileId}) {

    const [profile, setProfile] = useState(null)
    const [personalInfo, setPersonalInfo] = useState([])
    const [expertInfo, setExpertInfo] = useState([])
    const params = useParams()
    

    useEffect(() => {
        async function loadProfile(){
            // TODO: add fetch route
            const response = await fetch(`/user/trial/${params.id}`);
            const profile = await response.json();
            setProfile(profile);
            console.log(profile);
           
            

        }
        loadProfile();
    }, [])

    

    return (
        <>
        {profile === null ? <></> : 
        <div className="content-container">
            <div className="profile-page-card">
                <div className="left-container">
                    <img className="profile-picture" src="profile-picture.jpeg" alt="profile-picture"></img><br/>
                    <Rating name="read-only" value={profile.expertInfo.rating} readOnly />
                    <h1>{profile.personalInfo.name}</h1>
                    <h2>{profile.expertInfo.jobCount} jobs done<DoneIcon/></h2>
                </div>

                <div className="right-container">

                    <h1>About me</h1>
                    <div className="description">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h3>
                    </div>

                    <h1>Services</h1>
                    <div className="services">
                        <Service></Service>
                    </div>

                    <ReviewContainer/>
                    <ReferencesContainer references={profile.expertInfo.reference}/>
                    
                    {profile.expertInfo.professions.map((profession) => (
                        <ProfessionTag profession={profession}/>
                    ))}
                    
                    </div>
            </div>
            
        </div>
                    }
        </>     
    )
}

export default ProfilePageContent;
