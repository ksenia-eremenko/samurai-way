import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { getAuth, setAuthUserData } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Header } from './Header';


class HeaderContainer extends React.Component<any, any> {
  componentDidMount(): void {
    this.props.getAuth();
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData, getAuth })(HeaderContainer);