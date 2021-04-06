
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
   
    let postElement = props.postData.map(message => <Post message={message.message} likeCount={message.likesCount} />)

    return (
        <div>
            <div className={s.post_block}>
                <div className={s.my_post}>
                    <p>My post</p>
                </div>
                <form className={s.form}>
                    <textarea type="text" placeholder="you news..." />
                    <button type="button">Send</button>
                </form>
            </div>
            <div className={s.other_post}>
                {postElement}
                
            </div>
        </div>
    )
}

export default MyPosts;