import React from 'react'
import s from './Users.module.scss'
import { UsersPropsType } from './UsersContainer'
import axios from 'axios';

class Users extends React.Component<UsersPropsType, any> {
    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    render() {
        return <div className={s.users}>
            {/* <button onClick={this.getUsers}>Get Users</button> */}
            <div className={s.items}>
                {this.props.users.users.map(e => <div className={s.item} key={e.id}>
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