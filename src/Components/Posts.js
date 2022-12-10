import {useEffect, useState } from "react";
import PostComponent from "./PostComponent";
import { getPosts, getSessionFromStorage, refreshTokens } from "../Helper/ServerRequest";
import { useNavigate } from "react-router-dom";


function Posts() {
    let { accessToken, refreshToken } = getSessionFromStorage();
    const navigate = useNavigate();

    const [state, setState] = useState({
        error: null,
        isLoaded: false,
        items: []
    });

    useEffect(() => {
        getPosts({ accessToken, refreshToken })
            .then((result) => {
                setState({
                    isLoaded: true,
                    items: result
                });
            },(error)=>{
                navigate('/logout')
            })
    }, []);

    const { error, isLoaded, items } = state;

    if (error) {
        return <p> Error {error}</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="GridPosts">
                {items.map((item) => (
                    <PostComponent
                        key={item.imgSours}
                        text={item.text}
                        img={'http://localhost:3001/' + item.imgSours}
                        postId={item.id} />
                ))}
            </div>
        )
    }
}

export default Posts;