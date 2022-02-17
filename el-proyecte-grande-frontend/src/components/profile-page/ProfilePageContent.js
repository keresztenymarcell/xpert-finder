import { useNavigate, useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Rating from '@mui/material/Rating';
import ReferencesContainer from './ReferencesContainer';
import ReviewContainer from './ReviewContainer';
import UserService from '../service/UserService';
import ServicesContainer from './ServicesContainer';
import DescriptionContainer from './DescriptionContainer';
import ProfessionContainer from './ProfessionContainer';




function ProfilePageContent({user}) {

    // const user = useContext(UserContext);
    const [profile, setProfile] = useState(null)

    
    const params = useParams();
    const navigate = useNavigate();

    


    useEffect(() => {
        async function loadProfile(){
            const response = await UserService.getFetchWithHeader(`/user/${params.id}/expert-profile`);
            if (response.status === 200) {
                const profile = await response.json();
            setProfile(profile);
            } else {
                navigate("/login?error=true");
            }
            
        }
        loadProfile();
    }, [params.id])

    async function addReview(message, rating){
        const body = {
            message : message,
            rating : rating,
            userId: user.id,
            expertId: profile.expertInfo.id
        }
        await UserService.postFetchWithHeader(`/review/new`, JSON.stringify(body))

        const response2 = await UserService.getFetchWithHeader(`/user/${params.id}/expert-profile`);
        const profile2 = await response2.json();
        setProfile(profile2);
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
                    <ReviewContainer reviews={profile.expertInfo.reviews} addReview={addReview}/>
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
