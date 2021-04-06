
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" alt="#" />
            <p> {props.message}</p>
            <span>Like</span>
            <span>{props.likeCount}</span>
        </div>
    )
}

export default Post;