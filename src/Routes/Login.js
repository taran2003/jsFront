import '../CSS/Login.css';
import {useState} from "react";
import useAuthContext from '../Providers/useAuthContext';
import NavigationComponent from "../Components/NavigationComponent";
import Form from "../Components/LoginFormComponent";
import {login} from "../Helper/ServerRequest";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const {setIsLoggedIn} = useAuthContext();

    let [form, setForm] = useState({
        login: '', password: '',
    });

    const handelState = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function onSubmit() {
        const accessToken  = await login({login:form.login,password:form.password});
        if(accessToken){
            setIsLoggedIn(true);
            navigate("/main");
        }
    }

    return (<div>
        <NavigationComponent>register</NavigationComponent>
        <div className="App">
            <Form
                onChange={handelState}
                onSubmit={onSubmit}
                form={form}
            />
        </div>
    </div>);
}

export default Login;
