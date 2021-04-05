
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
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
                <Post message='Hi, how are yoy?' />
                <Post message="It's my first post" />
                <Post message='Hi Bro!' />
                <Post message='My name Dmitriy' />
                <Post message='Hi, how are yoy?' />
                <Post message="It's my first post" />
                <Post message='Hi Bro!' />
                <Post message='My name Dmitriy' />
                <Post message='Hi, how are yoy?' />
                <Post message="It's my first post" />
                <Post message='Hi Bro!' />
                <Post message='My name Dmitriy' />
                <Post message='Hi, how are yoy?' />
                <Post message="It's my first post" />
                <Post message='Hi Bro!' />
                <Post message='My name Dmitriy' />
                
            </div>
        </div>
    )
}

export default MyPosts;