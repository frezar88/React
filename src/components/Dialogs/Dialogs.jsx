import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'




const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Natasha' },
        { id: 4, name: 'Egor' },
        { id: 5, name: 'Sveta' },
        { id: 6, name: 'Dima' },
    ]

    let message = [
        { id: 1, message: 'HI' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Hello' },
        { id: 5, message: 'Noob' },
        { id: 6, message: 'Hello' },
    ]

    let dialogsElements = dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })


    let messageElement = message.map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElement}
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