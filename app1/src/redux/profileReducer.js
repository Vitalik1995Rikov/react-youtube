let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let ADD_POST = 'ADD-POST';

let initialState = {
  _state: {
    postData: [
    {id: 1, message: 'Hi, how are you?', likes: 15},
    {id: 2, message: 'My first post', likes: 20}
  ],
  newPostText: 'it-kamasutra',
  messagesData: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'how are you'},
    {id: 3, message: 'oi boy'},
    {id: 4, message: 'oi boy'},
    {id: 5, message: 'oi boy'}
  ],
  dialogsData: [
    {id: 1, name: 'Vitaly'},
    {id: 2, name: 'Evgeny'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Dmitry'},
    {id: 5, name: 'Victor'}
  ], 
  newMessageBody: '',
  sidebar: {}
}
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
          id: 5,
          message: state.newPostText,
          likes: 0
        };
          state.postData.push(newPost);
          state.newPostText = '';
         
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
          state.newPostText = action.newText;
      } 
              
    return state;
}

export let addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  } 
  
export let updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }  

export default profileReducer;