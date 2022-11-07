import './App.css';
import {useState} from "react";

function App() {

    const [login,setLogin] = useState('');
    const [password,setPassword] = useState('');
    let user = {
        login: login,
        password: password,
    };

    const loginHandler = (e) =>
    {
        setLogin(e.target.value);
    }

    const passwordHandler = (e) =>
    {
        setPassword(e.target.value);
    }

    const send = () => {
        alert(JSON.stringify(user))
    }

    return (
    <div className="App">
        <div className="block">
            <input onChange={loginHandler} value={login} className="input" name="login" placeholder={"login"} type={"text"}/>
            <input onChange={passwordHandler} value={password} className="input" name="password" placeholder={"password"} type={"password"}/>
            <button className="button" onClick={send} >submit</button>
        </div>
    </div>
  );
}

export default App;
