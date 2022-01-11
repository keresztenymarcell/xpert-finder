import Button from "./Button";

function ButtonPanel({user, setUser}) {

    const buttonBackground = '#482673';
    const textColor = '#ed0b70';

    if (user) {
        return (
            <>
                <Button backgroundColor={buttonBackground} textColor={textColor} text='Log Out' onClick={() => {setUser(null)}}/>
                <Button backgroundColor={buttonBackground} textColor={textColor} text="Messages" />
            </>
        )
    }
    else {
        return (
            <>
                <Button backgroundColor={buttonBackground} textColor={textColor} text='Log In' onClick={() => {setUser('placeholderUser')}}/>
                <Button backgroundColor={buttonBackground} textColor={textColor} text="Register"/>
            </>
        )
    }
}

export default ButtonPanel;