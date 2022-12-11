import axios from 'axios';

export const axiosInstance = axios.create({
    withCredentials: true,
});

export const getSessionFromStorage = () => {
    return {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken')
    }
}

export const getUserFromStorage = () => {
    return {
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName')
    }
}


const Request = async ({
    headers = {},
    method = 'POST',
    url,
    data,
    params,
    isUpdatable = false
}) => {

    const options = {
        headers,
        method,
        data,
        params,
        url,
    };
    
    let { accessToken, refreshToken } = getSessionFromStorage();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            ...authHeaders()
        }
    }
    
    try {
        const result = await axiosInstance(options)
        return result;
    } catch (error) {
        if (isUpdatable) {
            try {
                await refreshTokens({ accessTok: accessToken, refreshTok: refreshToken })
                options.headers = {
                    ...options.headers,
                    ...authHeaders()
                }
                const result = await axiosInstance(options);
                return result;
            }catch(error){
                throw(error)
            }
        
        }
        throw error;
    }
};

export const login = async ({ login, password }) => {
    const { data } = await Request({
        url: 'http://localhost:3001/api/auth/login',
        data: {
            login,
            password,
        },
    });
    let { accessToken, refreshToken } = data;
    let {firstName,lastName} = data.user;
    localStorage.setItem('accessToken', (accessToken));
    localStorage.setItem('refreshToken', (refreshToken));
    localStorage.setItem('firstName', (firstName));
    localStorage.setItem('lastName', (lastName));
    return data.user;
};

function authHeaders() {
    let { accessToken } = getSessionFromStorage();
    return {
        Authorization: `Bearer ${accessToken}`,
    };
};

export const register = async ({ login, password, passwordConf, firstName, lastName }) => {
    if (password !== passwordConf) {
        return;
    }
    const { data } = await Request({
        url: 'http://localhost:3001/api/auth/register',
        data: {
            login,
            password,
            firstName,
            lastName
        },
    });
    return data;
};

export const createPost = async ({ image }) => {
    const { posts } = await Request({
        headers: {
            'content-type': 'multipart/form-data'
        },
        url: 'http://localhost:3001/api/post/add',
        data: image,
        isUpdatable: true
    });
};

export const getAllPosts = async ({ accessToken, refreshToken }) => {
    const { data } = await Request({
        url: 'http://localhost:3001/api/post/getAll',
        data: {
            accessToken,
            refreshToken
        },
        isUpdatable: true
    });
    return data;
};

export const getPosts = async ({ accessToken, refreshToken }) => {
    const { data } = await Request({
        url: 'http://localhost:3001/api/post/get',
        data: {
            accessToken,
            refreshToken
        },
        isUpdatable: true
    });
    return data;
};

export const deletePost = async ({ postId,refreshToken }) => {
    const { data } = await Request({
        url: 'http://localhost:3001/api/post/delete',
        data: {
            refreshToken,
            postId
        },
        isUpdatable: true
    });
    return data;
};

export const refreshTokens = async ({ accessTok, refreshTok }) => {
    const { data } = await Request({
        url: 'http://localhost:3001/api/auth/refresh',
        data: {
            accessToken: accessTok,
            refreshToken: refreshTok,
        },
    });
    let { accessToken, refreshToken } = data;
    localStorage.setItem('accessToken', (accessToken));
    localStorage.setItem('refreshToken', (refreshToken));
    return accessToken;
};
