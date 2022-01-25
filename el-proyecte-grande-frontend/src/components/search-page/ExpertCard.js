import ProfessionTag from '../profile-page/ProfessionTag';
import {useNavigate} from 'react-router-dom'

const ExpertCard = ({expert}) => {

    const navigate = useNavigate();


    return (

        <div onClick={() => {navigate(`/profile-${expert.id}`)}} className="expert-card">

            <div className="expert-left-container">
                <img className="profile-picture" src={expert.profilePicture} alt="profile"></img>
                {expert.expertInfo.professions.map((profession) => {
                    return <ProfessionTag key={profession.id + profession.name} profession={profession}/>
                })}
            </div>
            
            <div className="expert-right-container">
                <h1>{expert.name}</h1>
                <h3>{expert.expertInfo.description}</h3>
            </div>

        </div>
    )
}

export default ExpertCard
