import React from 'react'
import { UserType } from '../../redux/users-reducer'
import s from './Users.module.scss'

type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}
let Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
                        className={props.currentPage === p ? s.activePage : props.currentPage === p + 1 ? '' + s.prev : props.currentPage === p - 1 ? '' + s.next : ''}
                        onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                )
            })}
        </div>
        <div className={s.items}>
            {props.users.map(e => <div className={s.item} key={e.id}>
                <div className={s.left}>
                    <div className={s.image}>
                        <img src={(e.photos.small) ? e.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nQUCCa0BtWUXSIdVH803tKJvfL7hFrGXTXosMvver42iMR1DZUsNliYCAd-MTqhJjLM&usqp=CAU'} alt="" />
                    </div>
                    <div className={s.followed}>
                        {(e.followed)
                            ? <button onClick={() => { props.unFollow(e.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(e.id) }}>Follow</button>
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
export default Users