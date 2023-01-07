import {commentContext} from "./CommentProvider";
import {useContext} from "react";

export function useCommentContext() {
    return  useContext(commentContext);
}

export default useCommentContext;