import "../CSS/Main.css"
import NavigationComponent from "../Components/NavigationComponentMain";
import Posts from "../Components/Posts";



function Main() {
    return (
        <div>

            <NavigationComponent>logout</NavigationComponent>
            <div className='app'>
                <Posts/>
            </div>
        </div>
    );
}

export default Main;