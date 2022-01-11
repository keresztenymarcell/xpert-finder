function Button({text, onClick}) {

    return (
        <button className="baseButton" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button;