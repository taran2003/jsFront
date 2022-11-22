import '../CSS/Form.css';
import InputComponent from "./InputComponent";
import {Link} from "react-router-dom";

function LoginFormComponent({onChange, send, form }) {
    return(
        <form onSubmit={send} className="login">
            <InputComponent
                onChange = {onChange}
                value = {form.login}
                name = "login"
                placeholder = "login"
                type = "text"
            />
            <InputComponent
                onChange={onChange}
                value={form.password}
                name="password"
                placeholder="password"
                type="password"
            />
            <div>
                <button className="button">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default LoginFormComponent;