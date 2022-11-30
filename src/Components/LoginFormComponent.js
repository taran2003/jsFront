import '../CSS/Form.css';
import InputComponent from "./InputComponent";

function LoginFormComponent({onChange, send, form}) {
    return (
        <div className="login">
            <form>
                <InputComponent
                    onChange={onChange}
                    value={form.login}
                    name="login"
                    placeholder="login"
                    type="text"
                />
                <InputComponent
                    onChange={onChange}
                    value={form.password}
                    name="password"
                    placeholder="password"
                    type="password"
                />
                <div>
                </div>
            </form>
            <button className="button" onClick={send}>
                Login
            </button>
        </div>
    );
}

export default LoginFormComponent;