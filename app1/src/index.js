import './index.css';
import store from './redux/store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App dispatch={store.dispatch.bind(store)} 
        dialogsData={store._state.dialogsData} 
        messagesData={store._state.messagesData} 
        postData={store._state.postData}
        newPostText={store._state.newPostText}
        store={store}/>
      </BrowserRouter>,
      document.getElementById('root')
);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

