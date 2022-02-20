import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {navbarReducer} from "./reducers/navbarReducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, postmessage: 'Hey', likesCount: 10},
                {id: 2, postmessage: 'Yo', likesCount: 5},
                {id: 3, postmessage: 'How are you', likesCount: 6},
                {id: 4, postmessage: 'I\'m fine', likesCount: 2},
            ],
            newPostText: 'blabla'
        },
        dialogsPage: {
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
            ],
        },
        navPage: {
            friendsData: [
                {
                    id: 1,
                    name: 'Igor',
                    avatar: 'https://w7.pngwing.com/pngs/225/784/png-transparent-computer-icons-avatar-man-suit-man-logo-necktie-glasses.png'
                },
                {
                    id: 2,
                    name: 'Nastya',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzki7X41y9NAPgPDOgxP_ynk7OO22JNy6Uy79u1Z7yoPeGDZKdH0AaDscwOxCMPs10x7w&usqp=CAU'
                },
                {
                    id: 3,
                    name: 'Lesha',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4VFBDH7DKS6koS-5swLx1rUy8wtI7BkUdz5HdZymMDQau3nFQnvh80vF0vvClXxmbRnw&usqp=CAU'
                },
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navPage = navbarReducer(this._state.navPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;