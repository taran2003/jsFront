import '../CSS/Form.css';
import InputComponent from "./InputComponent";

function LoginFormComponent({onChange, onSubmit, form}) {
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
            </form>
            <button className="button" onClick={onSubmit}>
                Login
            </button>
        </div>
    );
}

export default LoginFormComponent;