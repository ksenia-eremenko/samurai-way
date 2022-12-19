import React from 'react'
import s from './Users.module.scss'
import { UsersPropsType } from './UsersContainer'
import axios from 'axios';

class Users extends React.Component<UsersPropsType, any> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div className={s.users}>
            <div className={s.pagination}>
                {pages.map((p, i) => {
                    return (
                        <span
                            key={i}
                            className={this.props.currentPage === p ? s.activePage : this.props.currentPage === p+1 ? '' + s.prev : this.props.currentPage === p-1 ? '' + s.next : ''}
                            onClick={() => this.onPageChanged(p)}
                        >{p}</span>
                    )
                })}
            </div>
            <div className={s.items}>
                {this.props.users.map(e => <div className={s.item} key={e.id}>
                    <div className={s.left}>
                        <div className={s.image}>
                            <img src={(e.photos.small) ? e.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nQUCCa0BtWUXSIdVH803tKJvfL7hFrGXTXosMvver42iMR1DZUsNliYCAd-MTqhJjLM&usqp=CAU'} alt="" />
                        </div>
                        <div className={s.followed}>
                            {(e.followed)
                                ? <button onClick={() => { this.props.unFollow(e.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(e.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.right}>
                        <div className={s.infoUser}>
                            <div className={s.name}>{e.name}</div>
                            <div className={s.status}>{(e.status) ? e.status : 'We grow fearless when we do the things we fear.'}</div>
                        </div>
                        <div className={s.location}>
                            {(e?.location?.country) ? <span>{e.location.country}, </span> : 'Ukraine, '}
                            {(e?.location?.city) ? <span>{e.location.city}</span> : 'Kyiv'}
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    }
}
export default Users