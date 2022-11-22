import '../CSS/Login.css';
import {useState} from "react";
import LinkComponent from "../Components/LinkComponent";
import Form from "../Components/LoginFormComponent";


function Login() {

    let [form, setForm] = useState({
        login: '',
        password: '',
    });

    const handelState = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const send = () => {
        alert(JSON.stringify(form))
    }

    return (
        <div>
            <div className="Navigation">
                <LinkComponent
                    to = {"/register"}
                    text = {"register"}
                />
            </div>
            <div className="App">
                <Form
                    onChange = {handelState}
                    send={send}
                    form = {form}
                />
            </div>
        </div>
    );
}

export default Login;
