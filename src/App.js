import './App.css';

function App() {
    const handelClick = () => {alert("massage");}

  return (
    <div className="App">
      <input placeholder={"login"} type={"text"}/>
      <input placeholder={"password"} type={"password"}/>
      <button onClick={handelClick}>submit</button>
    </div>
  );
}

export default App;
