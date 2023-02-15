import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addNewMessageActionCreator, InitialStateType } from '../../redux/dialogs-reducer'
import { AppStateType } from '../../redux/redux-store'
import { Dialogs } from './Dialogs'

type MapStateToPropsType = {
    dialogs: InitialStateType,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppStateType) => {

    return {
        dialogs: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(addNewMessageActionCreator(message));
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);