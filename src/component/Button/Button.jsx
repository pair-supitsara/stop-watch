import './Button.css'

function Button(props) {
    const style = {
        backgroundColor: props.color  
    }

    return <button style={style} onClick={props.action}>
        {props.text}
    </button>

}

export default Button;