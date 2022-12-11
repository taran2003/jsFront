import "../CSS/Main.css"
import NavigationComponent from "../Components/NavigationComponentMain";
import Posts from "../Components/UserPost";



function User() {
    return (
        <div>

            <NavigationComponent>main</NavigationComponent>
            <div className='app'>
                <Posts/>
            </div>
        </div>
    );
}

export default User;