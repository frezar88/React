
import MyPosts from './My Post/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'





const Profile = (props) => {
    
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                postData={props.state.post}
                newPostText={props.state.newPostText}
            />
        </div>
    )
}

export default Profile;


{/* <div>
    <div className={s.avaimg}>
        <img src="" alt="#" />
    </div>
    <div className={s.info__block}>
        <div className={s.info__name}>
            <p>Alexandr T.</p>
        </div>
        <div className={s.info__birthday}>
            <p>Date of Birth: <span> 17 may</span></p>
        </div>
        <div className={s.info__city}>
            <p>City: <span>Minsk</span></p>
        </div>
        <div className={s.info__education}>
            <p>Education: <span>none</span></p>
        </div>
        <div className={s.info__site}>
            <p>Web Site: <span><a href="#">https://github.com/frezar88?tab=repositories</a></span></p>
        </div>
    </div>
</div> */}