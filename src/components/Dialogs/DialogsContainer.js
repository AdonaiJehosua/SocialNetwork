import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


function mapStateToProps (state) {
    return {dialogsPage: state.dialogsPage}
}
function mapDispatchToProps (dispatch) {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (newMessage) => dispatch(updateNewMessageTextActionCreator(newMessage))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


