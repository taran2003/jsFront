import "../CSS/AddPost.css"
import NavigationComponent from "../Components/NavigationComponent";
import React, { useState } from "react";
import { createPost, getSessionFromStorage, refreshTokens } from "../Helper/ServerRequest";
import { useNavigate } from 'react-router-dom';
import InputComponent from "../Components/InputComponent";


function PostCreate() {
    const [img, setImg] = React.useState(null);
    let [form, setForm] = useState({});
    const navigate = useNavigate();

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const create = async () => {
        if (!img) { return; }
        let { accessToken, refreshToken } = getSessionFromStorage()
        const image = new FormData();
        image.append('image', img);
        image.append('text', form.text);
        image.append('accessToken', accessToken);
        image.append('refreshToken', refreshToken);

        
        try{
        await createPost({ image });
        navigate('/main');
        }catch(error){
            navigate('/logout')
        }

    }
    //to do текст в textArea
    return (
        <div>
            <NavigationComponent>logout</NavigationComponent>
            <div className="App">
                <div className="login">
                    <InputComponent
                        onChange={e => setImg(e.target.files[0])}
                        name="file"
                        type="file" />
                    <InputComponent
                        onChange={onChange}
                        value={form.text}
                        name="text"
                        placeholder="text"
                        type="text" />
                    <button onClick={create} className="button">send</button>
                </div>
            </div>
        </div>
    );
}

export default PostCreate;