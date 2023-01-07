import '../CSS/Comment.css';

function PostComponent({ text, commentId, creator}) {
    const id = commentId;

    return (
        <div className='comment'>
            <p className='Creator'>{creator}</p>
            <div className='Content'>
                <div className='commentText'>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default PostComponent;