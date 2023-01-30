import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../redux/redux-store'

type MapStatePropsType = {
    isAuth: boolean
}

export function withAuthRedirect(Component: ComponentType<JSX.IntrinsicAttributes>) {
    class RedirectComponent extends React.Component<MapStatePropsType, ComponentType<never>> {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />

            return <Component {...this.props} />
        }
    }
    let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent
}
