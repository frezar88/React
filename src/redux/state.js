let reRenderEntireTree = () => {
    console.log('State is changed')
}

let state = {
    profilePage: {
        post: [{ id: 1, message: 'Hi, how are yoy?', likesCount: 12 }, { id: 2, message: "It's my first post", likesCount: 2 }],
        newPostText: ''
    },
    dialogsPage: {
        message: [{ id: 1, message: 'HI' }, { id: 2, message: 'How are you' }, { id: 3, message: 'Yo' }, { id: 4, message: 'Hello' }, { id: 5, message: 'Noob' }, { id: 6, message: 'Hello' }],
        dialogs: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Alex' }, { id: 3, name: 'Natasha' }, { id: 4, name: 'Egor' }, { id: 5, name: 'Sveta' }, { id: 6, name: 'Dima' }],
        newMessage:''

    },
    sidebar: {
        friends: ''
    }

}

window.state = state
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.post.push(newPost)
    state.profilePage.newPostText = '';
    reRenderEntireTree(state);
}

export const updateNowPostText = (newText) => {
    state.profilePage.newPostText = (newText);
    reRenderEntireTree(state);

}
export const addNewMessage = (newMessage) => {
    state.dialogsPage.message.push({ id: 12, message: newMessage })
    state.dialogsPage.newMessage=''
    reRenderEntireTree(state);
}

export const checkValueTextArea = (newText) => {
    state.dialogsPage.newMessage = (newText);
    reRenderEntireTree(state);
}

export const subscribe = (observer) => {
    reRenderEntireTree = observer;
}

export default state;