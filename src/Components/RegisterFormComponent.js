import '../CSS/RegisterForm.css';
import InputComponent from "./InputComponent";
import {Link} from "react-router-dom";

function RegisterFormComponent({onChange, send, form }) {
    return (
        <form onSubmit={send} className="register">
            <InputComponent
                onChange={onChange}
                value={form.login}
                name="login"
                placeholder="login"
            />
            <InputComponent
                onChange={onChange}
                value={form.password}
                name="password"
                placeholder="password"
                type="password"
            />
            <InputComponent
                onChange={onChange}
                value={form.passwordConf}
                name="passwordConf"
                placeholder="passwordConf"
                type="password"
            />
            <div>
                <button className="button">
                    Submit
                </button>
            </div>
        </form>);
}

export default RegisterFormComponent;