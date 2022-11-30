import '../CSS/Post.css';

function PostComponent({text, img}) {
    return (
        <div className='Post'>
            <img className='img' src={img}/>
            <div className='text'>
                <p>{text + " aaaaaaaa aaaaa aaaa aaa aa a a aaaaa aaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa"}</p>
            </div>
        </div>
    );
}

export default PostComponent;