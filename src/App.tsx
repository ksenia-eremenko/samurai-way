import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';
import { StoreType } from './redux/types';

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  const { store } = props;

  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path='/' element={
            <Profile
              store={store}
            />
          } />
          <Route path='/profile' element={
            <Profile
              store={store}
            />
          } />
          <Route path='/dialogs' element={
            <DialogsContainer store={store} />
          } />
          <Route path='/news' element={
            <News />
          } />
          <Route path='/music' element={
            <Music />
          } />
          <Route path='/settings' element={
            <Settings />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
