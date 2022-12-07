import { connect } from 'react-redux'
import { addNewMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reducer'
import { RootStateType } from '../../redux/types';
import { Dialogs } from './Dialogs'

let mapStateToProps = (state: RootStateType) => {

    return {
        dialogsPage: state.dialogs
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {

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