import '../CSS/Login.css';
import {useState} from "react";
import {Link} from "react-router-dom";
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
        <div className="App">
            <FormComponent
                onChange = {handelState}
                send={send}
                form = {form}
            />
        </div>
    );
}

export default Register;