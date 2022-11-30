import '../CSS/Login.css';
import {useState} from "react";
import FormComponent from "../Components/RegisterFormComponent";
import { register} from "../Helper/ServerRequest";
import NavigationComponent from "../Components/NavigationComponent";

function Register() {

    let [form, setForm] = useState({
        login: '',
        password: '',
    });

    const handelState = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const send = async () => {
        const {login,password,passwordConf,firstName,lastName} = form;
        const result  = await register({login,password,passwordConf,firstName,lastName});
        console.log(result);
    }

    return (
        <div>
            <NavigationComponent linkString={"login"}></NavigationComponent>
            <div className="App">
                <FormComponent
                    onChange={handelState}
                    send={send}
                    form={form}
                />
            </div>
        </div>
    );
}

export default Register;