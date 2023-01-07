import "../CSS/Main.css"
import NavigationComponent from "../Components/NavigationComponentMain";
import CommentPosts from "../Components/CommentPost";
import Comments from "../Components/Comment";



function Comment() {
    return (
        <div>
            <NavigationComponent>logout</NavigationComponent>
            <div className='app'>
                <CommentPosts/>
                <Comments/>
            </div>
        </div>
    );
}

export default Comment;