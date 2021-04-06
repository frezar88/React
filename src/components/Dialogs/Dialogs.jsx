import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'




const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Natasha' },
        { id: 4, name: 'Egor' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Dima' },
    ]
    let messagsData = [
        { id: 1, message: 'HI' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Hello' },
        { id: 5, message: 'Noob' },
        { id: 6, message: 'Hello' },
    ]




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            
           
            </div>
            <div className={s.messages}>
                <Message message={messagsData[0].message} />
                <Message message={messagsData[1].message} />
                <Message message={messagsData[2].message} />
                <Message message={messagsData[3].message} />
                <Message message={messagsData[4].message} />
                <Message message={messagsData[5].message} />
            </div>
        </div>
    )
}


const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Dialogs;