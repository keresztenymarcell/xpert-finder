function Button({text, onClick, backgroundColor, textColor}) {

    return (
        <button className="baseButton" onClick={onClick} style={{backgroundColor: backgroundColor, color: textColor}}>
            {text}
        </button>
    )
}

export default Button;