import { useEffect, useState } from "react";
import CommentPostComponent from "./CommentPostComponent";
import { getSessionFromStorage, getPost } from "../Helper/ServerRequest";
import { useNavigate } from "react-router-dom";


function CommentPosts() {
    let { accessToken, refreshToken } = getSessionFromStorage();
    const navigate = useNavigate();
    const postId = parseInt(localStorage.getItem('postId'),10);

    const [state, setState] = useState({
        error: null,
        isLoaded: false,
        item: null,
    });

    useEffect(() => {
        getPost({ accessToken, refreshToken, id:postId })
            .then((result) => {
                setState({
                    isLoaded: true,
                    item: result,
                });
            }, (error) => {
                navigate('/logout')
            })
    }, []);

    const { error, isLoaded, item } = state;

    if (error) {
        return <p> Error {error}</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="GridPosts">
                <CommentPostComponent
                    key={item.post.imgSours}
                    text={item.post.text}
                    img={'http://localhost:3001/' + item.post.imgSours}
                    postId={item.post.id}
                    creator={`${item.user.firstName} ${item.user.lastName}`} />
            </div>
        )
    }
}

export default CommentPosts;