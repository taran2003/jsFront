import '../CSS/Post.css';
import { useNavigate } from 'react-router-dom';
import usePostContext from '../Providers/usePostContext'

const request = require( '../Helper/ServerRequest');

function UserPostComponent({ text, img, postId, creator}) {
    const id = postId;
    const navigate = useNavigate();
    const {postsLength,setPostsLength} = usePostContext();

    const deletePost = async () => {
        try{
            await request.deletePost({ postId:id });
            setPostsLength(postsLength-1);
            }catch(error){
                navigate('/logout')
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
            <button className='button' onClick={deletePost}>delete</button>
        </div>
    );
}

export default UserPostComponent;