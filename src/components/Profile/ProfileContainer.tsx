import axios from 'axios';
import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-store';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


class ProfileContainer extends React.Component<any, ComponentType<never>> {
  componentDidMount(): void {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 12;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));