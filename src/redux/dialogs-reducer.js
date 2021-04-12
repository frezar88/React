const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHECK_VALUE_TEXT_AREA = 'CHECK-VALUE-TEXT-AREA'

let initialState={
    message: [{id: 1, message: 'HI'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'Noob'},
        {id: 6, message: 'Hello'}],
    dialogs: [{id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Natasha'},
        {id: 4, name: 'Egor'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Dima'}],
    newMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            state.message.push({id: 12, message: action.newMessage})
            state.newMessage = ''

            return state
        case CHECK_VALUE_TEXT_AREA:
            state.newMessage = (action.newText);

            return state
        default:
            return state
    }
}

export const addNewMessage = (newMessage) => ({type: ADD_NEW_MESSAGE, newMessage: newMessage});
export const checkValueTextArea = (text) => ({type: CHECK_VALUE_TEXT_AREA, newText: text});


export default dialogsReducer