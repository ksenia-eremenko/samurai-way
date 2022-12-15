import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addNewMessageActionCreator, InitialStateType, updateNewMessageActionCreator } from '../../redux/dialogs-reducer'
import { AppStateType } from '../../redux/redux-store'
import { Dialogs } from './Dialogs'

type MapStateToPropsType = {
    dialogs: InitialStateType
}
type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessage: (text: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogs
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

    return {
        sendMessage: () => {
            dispatch(addNewMessageActionCreator())
            dispatch(updateNewMessageActionCreator(''))
        },
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageActionCreator(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;