import axios from 'axios';

export const axiosInstance = axios.create({
    withCredentials: true,
});

export const getSessionFromStorage = () => localStorage.getItem('tokens');

// фабрика создания запросов
const request = async ({
                                  headers = {},
                                  method = 'POST',
                                  url,
                                  data,
                                  params,
                              }) => {
    // получили токен
    const { accessToken, refreshToken } = getSessionFromStorage() || {};

    // если есть токен то добавили его в header
    if (accessToken) {
        data = {accessToken, refreshToken};
    }

    // формируем параметры запроса
    const options = {
        headers,
        method,
        data,
        params,
        url,
    };

    try {
        // выполняем запрос
        const result = await axiosInstance(options);

        // const { data } = result
        // console.log(data);

        return result;
    } catch (error) {
        console.error(error);

        throw error;
    }
};

// пример запроса авторизации
export const login = async ({ login, password }) => {
    const { data } = await request({
        url: 'http://localhost:3001/api/auth/login',
        data: {
            login,
            password,
        },
    });
    let {accessToken, refreshToken} = data;
    localStorage.setItem('tokens', (accessToken,refreshToken));
    return accessToken;
};

export const register = async ({ login, password, passwordConf, firstName, lastName }) => {
    if(password !== passwordConf){
        return ;
    }
    const { data } = await request({
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

// пример запроса получения постов
// const getPost = ({ login, password }) => {
//     const { posts } = request({
//         url: '/posts',
//     });
//
//     return posts;
// };
