const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'Exterminate!!!'},
        {id: 2, message: 'Hi, i\'m Doctor'},
        {id: 3, message: 'Good time of the day, dear listeners'},
        {id: 4, message: 'Gagaga'},
        {id: 5, message: 'Bad Woolf'},
        {id: 6, message: 'Run you clever boy'},
        {id: 7, message: 'Hmmm...'},
    ],
    newMessageText: 'bububu',
    dialogsData: [
        {id: '1', name: 'Doctor'},
        {id: '2', name: 'Klara'},
        {id: '3', name: 'Dalek'},
        {id: '4', name: 'Rosa'},
        {id: '5', name: 'Goose'},
        {id: '6', name: 'Unpotum'},
        {id: '7', name: 'Serioja'},
    ]
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 8, message: state.newMessageText}],
                newMessageText: ''
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.messageText
            }
    }
    return state;
}

export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let updateNewMessageTextActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: newMessage
    }
};