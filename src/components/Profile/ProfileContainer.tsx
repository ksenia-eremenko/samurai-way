import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';


class ProfileContainer extends React.Component<any, ComponentType<never>> {

  componentDidMount(): void {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 26937;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus} />
    )
  }
}

let mapStateToProps = (state: AppStateType): any => {
  return {
    profile: state.profile.profile,
    status: state.profile.status
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter
)(ProfileContainer)