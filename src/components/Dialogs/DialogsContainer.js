import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import React from "react";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";


function mapStateToProps (state) {
    return {
        dialogsPage: state.dialogsPage,
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (newMessage) => dispatch(updateNewMessageTextActionCreator(newMessage))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)


