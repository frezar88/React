import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";




const MyPosts = (props) => {


    let postElement = props.postData.map(message => <Post message={message.message} likeCount={message.likesCount}/>)

    let newPostElement = React.createRef()

    let send = () => {

        props.dispatch(addPostActionCreator())

    }
    let onPostChange = () => {
        let text = newPostElement.current.value

        let action = updateNewPostActionCreator(text);
        props.dispatch(action);

    }
    return (
        <div>
            <div className={s.post_block}>
                <div className={s.my_post}>
                    <p>My post</p>
                </div>
                <form className={s.form}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} type="text"
                              placeholder="you news..."/>
                    <button onClick={send} type="button">Send</button>
                </form>
            </div>
            <div className={s.other_post}>
                {postElement}

            </div>
        </div>
    )
}

export default MyPosts;