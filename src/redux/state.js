let store = {
    _state: {
        profilePage: {
            post: [{id: 1, message: 'Hi, how are yoy?', likesCount: 12}, {
                id: 2,
                message: "It's my first post",
                likesCount: 2
            }],
            newPostText: ''
        },
        dialogsPage: {
            message: [{id: 1, message: 'HI'}, {id: 2, message: 'How are you'}, {id: 3, message: 'Yo'}, {
                id: 4,
                message: 'Hello'
            }, {id: 5, message: 'Noob'}, {id: 6, message: 'Hello'}],
            dialogs: [{id: 1, name: 'Bob'}, {id: 2, name: 'Alex'}, {id: 3, name: 'Natasha'}, {
                id: 4,
                name: 'Egor'
            }, {id: 5, name: 'Sveta'}, {id: 6, name: 'Dima'}],
            newMessage: ''

        },
        sidebar: {
            friends: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State is changed')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNowPostText(newText) {
        this._state.profilePage.newPostText = (newText);
        this._callSubscriber(this._state);
    },
    addNewMessage(newMessage) {
        this._state.dialogsPage.message.push({id: 12, message: newMessage})
        this._state.dialogsPage.newMessage = ''
        this._callSubscriber(this._state);
    },
    checkValueTextArea(newText) {
        this._state.dialogsPage.newMessage = (newText);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store


export default store;