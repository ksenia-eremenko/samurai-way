import React from 'react'
import { connect } from 'react-redux'
import { RootStateType } from '../../redux/types'
import { followAC, setUsersAC, unFollowAC } from '../../redux/users-reducer'
import { Users } from './Users'

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.users.users
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

// export default UsersContainer;