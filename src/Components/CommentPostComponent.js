import '../CSS/Post.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import InputComponent from './InputComponent';
import {createComment} from '../Helper/ServerRequest';
import useCommentContext from '../Providers/useCommentContext';

function PostComponent({ text, img, postId, creator }) {
    const id = postId;
    const navigate = useNavigate();
    const {commentLength,setCommentLength} = useCommentContext()

    let [commentText, setText] = useState('');

    const handelState = (e) => {
        setText({ ...commentText, [e.target.name]: e.target.value });
    }

    const Comment = async () =>{
        try {
        await createComment({text:commentText});
        setText({text:""});
        setCommentLength(commentLength+1);
        } catch (e) {
            navigate('/logout');
        }
    }

    return (
        <div className='Post'>
            <p className='Creator'>{creator}</p>
            <div className='Content'>
                <img className='img' src={img} />
                <div className='text'>
                    {text}
                </div>
            </div>
            <div className='Content'>
                <InputComponent
                    onChange={handelState}
                    value={commentText.text}
                    name="text"
                    placeholder="text"
                    type="text"
                />
                <button className='button' onClick={Comment}>Comment</button>
            </div>
        </div>
    );
}

export default PostComponent;