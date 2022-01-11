import Button from "./Button";

function ButtonPanel({user, setUser}) {

    if (user) {
        return (
            <>
                <Button text='Log Out' onClick={() => {setUser(null)}}/>
                <Button text="Messages" />
            </>
        )
    }
    else {
        return (
            <>
                <Button text='Log In' onClick={() => {setUser('placeholderUser')}}/>
                <Button text="Register"/>
            </>
        )
    }
}

export default ButtonPanel;