import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { follow, InitialStateType, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching, toggleIsFollowingProgress, unFollow, UserType } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/Api';

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<any, ComponentType<never>> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)
            });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            });
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
                    unFollow={this.props.unFollow}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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

export const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUserCount, toggleIsFetching, 
    toggleIsFollowingProgress
})(UsersAPIComponent);