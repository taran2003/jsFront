import "../CSS/Login.css"
import useContext from "../useContext";
import NavigationComponent from "../Components/NavigationComponent";
import Test from "../Components/test";

function Main() {
    const {setIsLoggedIn} = useContext();
    return (
        <div>

            <NavigationComponent/>
            <div className='app'>
                <Test/>
                <p>login</p>
                <button onClick={() => {
                    setIsLoggedIn(false)
                }}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Main;