import '../CSS/Post.css';

function PostComponent({ text, img, postId, creator}) {
    const id = postId;


    return (
        <div className='Post'>
            <p className='Creator'>{creator}</p>
            <div className='Content'>
                <img className='img' src={img} />
                <div className='text'>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default PostComponent;