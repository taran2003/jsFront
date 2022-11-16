import '../CSS/Input.css';

function InputComponent({onChange, value, name, type}) {
    return(
        <input
            onChange = {onChange}
            value = {value}
            className = "input"
            name = {name}
            placeholder = {name}
            type = {type}
        />
    )
}

export default InputComponent;