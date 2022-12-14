import axios from 'axios';
import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { getUserProfile, setUserProfile } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { profileAPI } from '../../api/Api';


class ProfileContainer extends React.Component<any, ComponentType<never>> {

  componentDidMount(): void {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 12;
    }
    this.props.getUserProfile(userId)
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


function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(withRouter(ProfileContainer));