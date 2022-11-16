import '../CSS/Login.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import InputComponent from "../Components/InputComponent";
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
        <div className="App">
            <Form
                onChange = {handelState}
                send={send}
                form = {form}
            />
        </div>
    );
}

export default Login;
