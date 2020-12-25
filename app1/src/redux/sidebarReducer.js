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
  }};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;