let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

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

const dialogsReducer = (state = initialState, action) => {
    
     if (action.type === UPDATE_NEW_MESSAGE_BODY) {
          state.newMessageBody = action.body;
          
      } else if (action.type === SEND_MESSAGE) {
          let body = state.newMessageBody;
          state.newMessageBody = '';
          state.messagesData.push({id: 6, message: body})
      }
    
    return state;
}

export let sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  } 
  
export let updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
    }
  }  

export default dialogsReducer;