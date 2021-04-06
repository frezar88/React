import { NavLink } from 'react-router-dom'
import s from './DialogsItem.module.css'





const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id
    return (
        <div className={s.dialogsItem}>
            <NavLink to={path} activeClassName={s.activ}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;