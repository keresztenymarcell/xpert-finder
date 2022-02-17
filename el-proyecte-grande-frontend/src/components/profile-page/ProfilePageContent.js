import { useParams } from "react-router-dom";
import Service from './Service';
import React, {useEffect, useState, useContext} from 'react';
import UserContext from '../App';
import ProfessionTag from './ProfessionTag';
import DoneIcon from '@mui/icons-material/Done';
import Rating from '@mui/material/Rating';
import ReferencesContainer from './ReferencesContainer';
import ReviewContainer from './ReviewContainer';
import UserService from '../service/UserService';
import ServicesContainer from './ServicesContainer';
import DescriptionContainer from './DescriptionContainer';
import ProfessionContainer from './ProfessionContainer';
import AddReviewContainer from './AddReviewContainer';



function ProfilePageContent() {

    const user = useContext(UserContext);
    const [profile, setProfile] = useState(null)
    const params = useParams()
    

    useEffect(() => {
        async function loadProfile(){
            // TODO: add fetch route
            
            const response = await UserService.getFetchWithHeader(`/user/${params.id}/expert-profile`);
            const profile = await response.json();
            setProfile(profile);
            console.log(profile);
        }
        loadProfile();
    }, [])

    function addReview(data){
        



    }

    

    return (
        <>
        {profile === null ? <></> : 
        <div className="profile-page">
            <div className="profile-page-card">
                <div className="left-container">
                    <img className="profile-picture" src={profile.personalInfo.profilePicture} alt="me"></img><br/>
                    <Rating name="read-only" value={profile.expertInfo.rating} readOnly />
                    <h1>{profile.personalInfo.name}</h1>
                    <h2>{profile.expertInfo.jobCount} jobs done<DoneIcon/></h2>
                </div>

                <div className="right-container">
                    <DescriptionContainer description={profile.expertInfo.description}/>
                    <ServicesContainer services={profile.expertInfo.services}/>
                    <ReviewContainer reviews={profile.expertInfo.reviews}/>
                    {/* <AddReviewContainer user={user}/> */}
                    
                    <ReferencesContainer references={profile.expertInfo.references}/>
                    <ProfessionContainer professions={profile.expertInfo.professions}/>
                </div>
            </div>
            
        </div>
                    }
        </>     
    )
}

export default ProfilePageContent;
