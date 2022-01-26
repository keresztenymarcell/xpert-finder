import {Link} from "react-router-dom";


const Header = ({user, setUser}) => {

    return (
        
        <header>
            <Link to="/"><img className="logo" src="Xpert_logo.png" alt="logo"></img></Link>
            <nav>
                <ul className="nav_links">
                    <li><Link to="/"><button>Home</button></Link></li>
                    {user == null ?
                    <>
                        <li><Link to="/register"><button>Register</button></Link></li>
                        <li onClick={() => {setUser('placeholderUser')}}><button>Sign in</button></li>
                    </>
                    :
                    <>
                        <li><Link to="/edit-profile"><button>Edit Profile</button></Link></li>
                        <li onClick={() => {setUser(null)}}><button>Log out</button></li>
                    </>}
                    
                </ul>
            </nav>
        </header>
        
    )
}

export default Header
