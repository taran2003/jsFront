import '../CSS/Post.css';

function PostComponent({ text, img, postId }) {
    const id = postId;


    return (
        <div className='Post'>
            <img className='img' src={img} />
            <div className='text'>
                {text}
            </div>
                <button>delete</button>
        </div>
    );
}

export default PostComponent;