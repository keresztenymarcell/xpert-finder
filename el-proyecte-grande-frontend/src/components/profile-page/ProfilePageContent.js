import { useParams } from "react-router-dom";
import Service from './Service';
import {useEffect, useState} from 'react';
import ProfessionTag from './ProfessionTag';
import DoneIcon from '@mui/icons-material/Done';
import Rating from '@mui/material/Rating';
import ReferencesContainer from './ReferencesContainer';
import ReviewContainer from './ReviewContainer';
import UserService from '../../services/UserService';



function ProfilePageContent() {

    const [profile, setProfile] = useState(null)
    const params = useParams()
    

    useEffect(() => {
        async function loadProfile(){
            // TODO: add fetch route
            
            const response = await UserService.getFetchWithHeader(`/user/${params.id}/expert-profile`);
            const profile = await response.json();
            setProfile(profile);
        }
        loadProfile();
    }, [params.id])

    

    return (
        <>
        {profile === null ? <></> : 
        <div className="content-container">
            <div className="profile-page-card">
                <div className="left-container">
                    <img className="profile-picture" src={profile.personalInfo.profilePicture} alt="me"></img><br/>
                    <Rating name="read-only" value={profile.expertInfo.rating} readOnly />
                    <h1>{profile.personalInfo.name}</h1>
                    <h2>{profile.expertInfo.jobCount} jobs done<DoneIcon/></h2>
                </div>

                <div className="right-container">

                    <h1>About me</h1>
                    <div className="description">
                        <h3>{profile.expertInfo.description}</h3>
                    </div>

                    <h1>Services</h1>
                    <div className="services">
                
                        {profile.expertInfo.services.map((service) => {
                            return <Service key={service.id} service={service}/>
                        })}
                        
                    </div>

                    <ReviewContainer reviews={profile.expertInfo.reviews}/>
                    <ReferencesContainer references={profile.expertInfo.references}/>
                    
                    {profile.expertInfo.professions.map((profession) => (
                        <ProfessionTag key={profession.id} profession={profession}/>
                    ))}
                    
                    </div>
            </div>
            
        </div>
                    }
        </>     
    )
}

export default ProfilePageContent;
