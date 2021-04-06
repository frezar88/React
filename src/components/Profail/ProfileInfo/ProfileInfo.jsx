import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <div className={s.ProfileHeaderImg}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVmSKBeIVewiRAtDQxH2m6KEjqAIvzzH2NmCJE6SU-0lA4QKjq_O38R1OeJmx1Qz2Xg&usqp=CAU" />
            </div>
            <div className={s.discriptionBlock}>
                ava+discription
            </div>
        </div>
    )
}

export default ProfileInfo;