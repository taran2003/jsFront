import '../CSS/Login.css';
import {useState} from "react";
import LinkComponent from "../Components/LinkComponent";
import FormComponent from "../Components/RegisterFormComponent";

function Register(){
    let   [form,setForm]  = useState( {
        login:'',
        password:'',
    });

    const handelState = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const send = () => {
        alert(JSON.stringify(form))
    }

    return(
        <div>
            <div className="Navigation">
                <LinkComponent
                    to = {"/login"}
                    text = {"login"}
                />
            </div>
        <div className="App">
            <FormComponent
                onChange = {handelState}
                send={send}
                form = {form}
            />
        </div>
        </div>
    );
}

export default Register;