import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'




const Dialogs = (props) => {
   

    let dialogsElements = props.state.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })
    
    let messageElement = props.state.message.map(message => <Message message={message.message} />)

    
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




export default Dialogs;