import Button from "./Button";
import { useState } from "react";

function ButtonPanel() {

    const [loggedIn, setLoggedIn] = useState(false);

    function logIn() {
        console.log("I'm logging in")
        setLoggedIn(true);
    }

    if (loggedIn) {
        return (
            <>
                <Button text="Messages" />
                <Button text="Log Out" />
            </>
        )
    }
    else {
        return (
            <>
                <Button text="Log In" onclick={logIn} />
                <Button text="Register"/>
            </>
        )
    }
}

export default ButtonPanel;