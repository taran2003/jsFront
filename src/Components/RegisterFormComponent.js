import '../CSS/RegisterForm.css';
import InputComponent from "./InputComponent";

function RegisterFormComponent({onChange, send, form}) {
    return (
        <div className="register">
            <form>
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
                    placeholder="password confirm"
                    type="password"
                />
                <InputComponent
                    onChange={onChange}
                    value={form.firstName}
                    name="firstName"
                    placeholder="first name"
                    type="login"
                />
                <InputComponent
                    onChange={onChange}
                    value={form.lastName}
                    name="lastName"
                    placeholder="last name"
                    type="login"
                />
            </form>
            <button className="button" onClick={send}>
                Register
            </button>
        </div>
    );
}

export default RegisterFormComponent;