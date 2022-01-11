import Button from "./Button";

function ButtonPanel() {
    // If not logged in:
    return (
        <>
            <Button text="Log In"/>
            <Button text="Register"/>
        </>
    )
    // else return different
}

export default ButtonPanel;