import Rating from '@mui/material/Rating';
import ProfessionTag from '../profile-page/ProfessionTag';

const ExpertCard = ({expert}) => {
    return (

        
        <div className="expert-card">
            <div className="expert-left-container">
                <img className="profile-picture" src={expert.personalInfo.profilePicture} alt="profile picture"></img>
                {expert.expertInfo.professions.map((profession) => {
                    return <ProfessionTag key={profession.id + profession.name} profession={profession}/>
                })}
            </div>
            
            <div className="expert-right-container">
                <h1>{expert.personalInfo.name}</h1>
                <h3>{expert.expertInfo.description}</h3>
                
            </div>
            
            


        </div>
    )
}

export default ExpertCard
