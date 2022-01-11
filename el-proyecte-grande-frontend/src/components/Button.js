function Button({text, onclick}) {
    return (
        <button className="baseButton" onClick={onclick}>
            {text}
        </button>
    )
}

export default Button;