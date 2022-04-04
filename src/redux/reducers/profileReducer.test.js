import {addPostActionCreator, profileReducer} from "./profileReducer";

it ('length of posts should be incremented', () => {
    let action = addPostActionCreator('test message');
    let state = {
        postsData: [
            {id: 1, postmessage: 'Hey', likesCount: 10},
            {id: 2, postmessage: 'Yo', likesCount: 5},
            {id: 3, postmessage: 'How are you', likesCount: 6},
            {id: 4, postmessage: 'I\'m fine', likesCount: 2},
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5)
})