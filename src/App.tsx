import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Settings } from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';

function App() {

  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path='/*' element={<ProfileContainer/>} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={
            <News />
          } />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
