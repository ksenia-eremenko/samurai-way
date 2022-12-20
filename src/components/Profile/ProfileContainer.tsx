import axios from 'axios';
import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { AppStateType } from '../../redux/redux-store';
import { setUserProfile } from '../../redux/profile-reducer';

class ProfileContainer extends React.Component<any, ComponentType<never>> {
  componentDidMount(): void {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      });
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}
let mapStateToProps = (state: AppStateType): any => {
  return {
    profile: state.profile.profile
  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);