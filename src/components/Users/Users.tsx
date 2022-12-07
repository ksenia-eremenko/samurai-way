import React from 'react'
import { v1 } from 'uuid'
import { UsersType } from '../../redux/types'
import s from './Users.module.scss'

type UsersPropsType = {
    users: Array<UsersType>
    unFollow: (id: string) => void
    follow: (id: string) => void
    setUsers: (users: any) => void
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                name: "Dmitry",
                photos: {
                    small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nQUCCa0BtWUXSIdVH803tKJvfL7hFrGXTXosMvver42iMR1DZUsNliYCAd-MTqhJjLM&usqp=CAU"
                },
                followed: true,
                status: "I'm a boss",
                location: {
                    city: "Kiev",
                    country: "Ukraine"
                },
            },
            {
                id: v1(),
                name: "Sasha",
                photos: {
                    small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nQUCCa0BtWUXSIdVH803tKJvfL7hFrGXTXosMvver42iMR1DZUsNliYCAd-MTqhJjLM&usqp=CAU"
                },
                followed: false,
                status: "I'm a boss",
                location: {
                    city: "Herson",
                    country: "Ukraine"
                }
            },
            {
                id: v1(),
                name: "Andrew",
                photos: {
                    small: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nQUCCa0BtWUXSIdVH803tKJvfL7hFrGXTXosMvver42iMR1DZUsNliYCAd-MTqhJjLM&usqp=CAU"
                },
                followed: true,
                status: "I'm a boss",
                location: {
                    city: "Sevastopol",
                    country: "Ukraine"
                }
            }
        ])
    }
    return (
        <div className={s.users}>
            <button onClick={() => {}}>Get Users</button>
            <div className={s.items}>
                {props.users.map(e => <div className={s.item} key={e.id}>
                    <div className={s.left}>
                        <div className={s.image}>
                            <img src={(e.photos.small) ? e.photos.small : ''} alt=""/>
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
                            {(e?.location?.country) ? <span>{e.location.country}</span> : ''}
                            {(e?.location?.city) ? <span>{e.location.city}</span> : ''}
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}