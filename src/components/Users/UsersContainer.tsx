import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, InitialStateType, setUsersAC, unFollowAC, UserType } from '../../redux/users-reducer'
import Users from './Users'

type MapStateToPropsType = {
    users: InitialStateType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);