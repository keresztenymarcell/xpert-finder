import {Link} from "react-router-dom";


const Header = ({user, setUser}) => {

    function clearUser() {
        localStorage.clear();
        setUser(null);
    }

    return (
        
        <header>
            <Link to="/"><img className="logo" src="Xpert_logo.png" alt="logo"></img></Link>
            <nav>
                <ul className="nav_links">
                    {(() => {
                        if (!user){
                           return <>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/login" >Log in</Link></li>
                                <li><Link to="/register">Register</Link></li>
                           </>
                        }
                        else{
                           return <>
                                <li>Hello, {user}!</li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/" onClick={() => {clearUser()}}>Log out</Link></li>
                                <li><Link to="/edit-profile"><button>Edit Profile</button></Link></li>
                            </>
                        }
                    })()}
                
                </ul>
            </nav>
        </header>
        
    )
}

export default Header
