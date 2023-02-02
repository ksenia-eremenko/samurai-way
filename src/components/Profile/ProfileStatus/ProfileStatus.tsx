import React from 'react'
import s from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div className={s.profileStatus}>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus