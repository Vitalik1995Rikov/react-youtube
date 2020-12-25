import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path='/dialogs' render={ () => <Dialogs store={props.store} />}/>
        <Route path='/profile' render={ () => <Profile newPostText={props.newPostText} 
          postData={props.postData} 
          dispatch={props.dispatch} 
          />}/>
        <Route path='/news' render={ () => <News/>}/>
        <Route path='/music' render={ () => <Music/>}/>
        <Route path='/settings' render={ () => <Settings/>}/>
      </div>  
    </div>
    </BrowserRouter>
  );
}

export default App;
