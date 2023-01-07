import { useEffect, useState } from "react";
import CommentComponent from "./CommentComponent";
import { getComment } from "../Helper/ServerRequest";
import { useNavigate } from "react-router-dom";
import useCommentContext from "../Providers/useCommentContext"

function Comments() {
    const navigate = useNavigate();
    const {commentLength, setCommentLength} = useCommentContext();

    const [state, setState] = useState({
        error: null,
        isLoaded: false,
        items: [],
    });

    useEffect(() => {
        getComment()
            .then((result) => {
                setState({
                    isLoaded: true,
                    items: result,
                });
                setCommentLength(state.items.length);
            }, (error) => {
                navigate('/logout')
            })
    }, [commentLength]);

    const { error, isLoaded, items } = state;

    if (error) {
        return <p> Error {error}</p>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="GridPosts">
                {items.map((item) => (
                    <CommentComponent
                    commentId={item.id}
                    text={item.text}
                    creator = {`${item.user.firstName} ${item.user.lastName}`}
                    />
                ))}
            </div>
        )
    }
}

export default Comments;