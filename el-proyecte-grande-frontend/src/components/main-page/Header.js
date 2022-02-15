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
                    <li><Link to="/">Home</Link></li>
                    {(() => {
                        if (!user){
                           return <>
                            <li><Link to="/login" >Log in</Link></li>
                            <li><Link to="/register">Register</Link></li>
                           </>
                        }
                        else{
                           return <li><Link to="/" onClick={() => {clearUser()}}>Log out</Link></li> 
                        }
                    })()}
                
                </ul>
            </nav>
        </header>
        
    )
}

export default Header
