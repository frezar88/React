
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postData = [
        { id: 1, message:'Hi, how are yoy?',likesCount:12},
        { id: 2, message: "It's my first post", likesCount: 2},
    ]

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
                <Post message={postData[0].message} likeCount={postData[0].likesCount} />
                <Post message={postData[1].message} likeCount={postData[1].likesCount} />
                
            </div>
        </div>
    )
}

export default MyPosts;