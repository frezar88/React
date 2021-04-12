import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";



let store = {
    _state: {
        profilePage: {
            post: [{id: 1, message: 'Hi, how are yoy?', likesCount: 12},
                {id: 2, message: "It's my first post",}],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: ''
        }
    },
    _callSubscriber() {
        console.log('State is changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar=sideBarReducer(this._state.sidebar,action)
        this._callSubscriber(this._state);
    }
}



window.store = store


export default store;