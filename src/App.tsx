import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';
import { RootStateType } from './redux/state';

type AppPropsType = {
  state: RootStateType
  dispatch: (action: any) => void
  // addNewMessage: () => void
  // updateNewMessage: (textMessage: string) => void
  // addPost: () => void
  // updateNewPostText: (textPost: string) => void
}

function App(props: AppPropsType) {
  const { state, dispatch } = props;

  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path='/' element={<Profile
            profileState={state.profilePage}
            dispatch={dispatch}
          />} />
          <Route path='/profile' element={
            <Profile
              profileState={state.profilePage}
              dispatch={dispatch}
            />
          } />
          <Route path='/dialogs' element={
            <Dialogs dialogsState={state.dialogsPage} dispatch={dispatch} />
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
