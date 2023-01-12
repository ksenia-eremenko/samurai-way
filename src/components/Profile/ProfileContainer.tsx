import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';


class ProfileContainer extends React.Component<any, ComponentType<never>> {

  componentDidMount(): void {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 12;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Navigate to={'/login'} />
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}
let mapStateToProps = (state: AppStateType): any => {
  return {
    profile: state.profile.profile,
    isAuth: state.auth.isAuth
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

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));