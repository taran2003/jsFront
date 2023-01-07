import { createContext, useState } from "react";

export const commentContext = createContext({commentLength:0 });

const CommentProvider = ({ children }) => {
    const [commentLength, setCommentLength] = useState(0);
    const value = { commentLength, setCommentLength };
    return (<commentContext.Provider value={value}>
        {children}
    </commentContext.Provider>);
}

export default CommentProvider;