import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/Dialogs/1' activeClassName={s.active}>Bob</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/Dialogs/2' activeClassName={s.active}> Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/Dialogs/3' activeClassName={s.active}> Max</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/Dialogs/4' activeClassName={s.active}> Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/Dialogs/5' activeClassName={s.active}> Victor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>HI</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;