import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPostComponent from "./UserPostComponent";
import { getPosts, getSessionFromStorage, getUserFromStorage,} from "../Helper/ServerRequest";
import usePostContext from '../Providers/usePostContext'


function Posts() {
    let { accessToken, refreshToken } = getSessionFromStorage();
    const navigate = useNavigate();
    const { firstName,lastName } = getUserFromStorage();

    const [state, setState] = useState({
        error: null,
        isLoaded: false,
        items: []
    });

    const {postsLength, setPostsLength} = usePostContext();

    useEffect(() => {
        getPosts({ accessToken, refreshToken })
            .then((result) => {
                setState({
                    isLoaded: true,
                    items: result.posts
                });
                setPostsLength(items.length);
            },(error)=>{
                navigate('/logout')
            })
    },[postsLength]);

    const { error, isLoaded, items } = state;

    if (error) {
        return <p> Error {error}</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="GridPosts">
                {items.map((item) => (
                    <UserPostComponent
                        key={item.imgSours}
                        text={item.text}
                        img={'http://localhost:3001/' + item.imgSours}
                        postId={item.id}
                        creator = {`${firstName} ${lastName}`} />
                ))}
            </div>
        )
    }
}

export default Posts;