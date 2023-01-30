import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, ComponentType<never>> {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />

            return <Component {...this.props} />
        }
    }
    let mapStateToPropsForRedirect = (state: AppStateType): any => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent
}
