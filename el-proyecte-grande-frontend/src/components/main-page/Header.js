import {Link} from "react-router-dom";


const Header = ({user, setUser}) => {

    return (
        
        <header>
            <Link to="/"><img className="logo" src="Xpert_logo.png" alt="logo"></img></Link>
            <nav>
                <ul className="nav_links">
                    <li><Link to="/">Home</Link></li>
                    {user == null ?
                    <>
                        <li><Link to="/register">Register</Link></li>
                        <li onClick={() => {setUser('placeholderUser')}}><a>Sign in</a></li>
                    </>
                    :
                    <>
                        <li><Link to="/edit-profile">Edit Profile</Link></li>
                        <li onClick={() => {setUser(null)}}><a>Log out</a></li>
                    </>}
                    
                </ul>
            </nav>
        </header>
        
    )
}

export default Header
