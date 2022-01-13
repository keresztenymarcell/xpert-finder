import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Header = ({user, setUser}) => {

    return (
        
        <header>
            <Link to="/"><img className="logo" src="Xpert_logo.png" alt="logo"></img></Link>
            <nav>
                <ul className="nav_links">
                    <li><Link to="/">Home</Link></li>
                    {(() => {
                        if (user == null){
                           return <li><Link to="/sing-in" onClick={() => {setUser('placeholderUser')}}>Sign in</Link></li> 
                        }
                        else{
                           return <li><Link to="/log-out" onClick={() => {setUser(null)}}>Log out</Link></li> 
                        }
                    })()}
                <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header
