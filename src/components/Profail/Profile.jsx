
import MyPosts from './My Post/MyPosts'
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVmSKBeIVewiRAtDQxH2m6KEjqAIvzzH2NmCJE6SU-0lA4QKjq_O38R1OeJmx1Qz2Xg&usqp=CAU" />
            </div>
            <div>
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
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;