import { createContext, useState } from "react";

export const postContext = createContext({ postsLength: 0 });

const PostProvider = ({ children }) => {
    const [postsLength, setPostsLength] = useState(0);
    const value = { postsLength, setPostsLength };
    return (<postContext.Provider value={value}>
        {children}
    </postContext.Provider>);
}

export default PostProvider;