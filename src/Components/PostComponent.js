import '../CSS/Post.css';
import { useNavigate } from 'react-router-dom';

function PostComponent({ text, img, postId, creator}) {
    const id = postId;
    const navigate = useNavigate();
    
    const openComments = async () => {
        localStorage.setItem('postId',id);
        navigate('/comment')
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
            <button className='button' onClick={openComments}>Comment</button>
        </div>
    );
}

export default PostComponent;