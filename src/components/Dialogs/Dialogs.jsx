import React from 'react'

import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'




const Dialogs = (props) => {
   
console.log(props)
    let dialogsElements = props.state.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })
    
    let messageElement = props.state.message.map(message => <Message message={message.message} />)
    let linkTextArea=React.createRef()
    let click = () => {
        let areaValue = linkTextArea.current.value
        props.addNewMessage(areaValue)
    }
    let change = () => {
        let areaValue = linkTextArea.current.value
        props.checkValueTextArea(areaValue)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea onChange={change} ref={linkTextArea} value={props.state.newMessage}  cols="30" rows="10"></textarea>
                <button onClick={click} >dsadsa</button>
            </div>
        </div>
    )
}




export default Dialogs;