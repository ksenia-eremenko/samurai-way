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
import store from './redux/redux-store';
// import store from './redux/store';
import { ActionsTypes, RootStateType } from './redux/types';

type AppPropsType = {
  state: RootStateType
  dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
  const { state, dispatch } = props;
console.log(state);

  return (
    <div className="appWrapper">
      <Header />
      <Navbar />
      <div className="appWrapperContent">
        <Routes>
          <Route path='/' element={<Profile
            profileState={state.profile}
            dispatch={dispatch.bind(store)}
          />} />
          <Route path='/profile' element={
            <Profile
              profileState={state.profile}
              dispatch={dispatch.bind(store)}
            />
          } />
          <Route path='/dialogs' element={
            <Dialogs dialogsState={state.dialogs} dispatch={dispatch} />
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
