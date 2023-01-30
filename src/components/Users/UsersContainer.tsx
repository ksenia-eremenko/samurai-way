import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, getUsers, InitialStateType, setCurrentPage, toggleIsFollowingProgress, unfollow, UserType } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<any, ComponentType<never>> {
    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : ''}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

export type UsersPropsType = InitialStateType & MapDispatchToPropsType
let mapStateToProps = (state: AppStateType): InitialStateType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

export const UsersContainer = WithAuthRedirect(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleIsFollowingProgress, getUsers
})(UsersAPIComponent));