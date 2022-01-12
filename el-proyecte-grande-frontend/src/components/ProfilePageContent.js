import { useParams } from "react-router-dom";
import Service from './Service';

function ProfilePageContent() {

    const params = useParams()

    return (
        <div className="content-container">
            <div className="profile-page-card">
                <div className="left-container">
                    <img className="profile-picture" src="profile-picture.jpeg" alt="profile-picture"></img>
                    <h1>John Doe</h1>
                    <p>Budapest, Gyor, Szeged</p>
                    <h1>Reviewed X times</h1>
                    <p>5.0</p>
                    <p>{params.id}</p>
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
                    

                    
                </div>

                



            </div>
            
        </div>
    )
}

export default ProfilePageContent;
