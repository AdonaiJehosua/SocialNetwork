import {connect} from "react-redux";
import FriendsBlock from "./FriendsBlock";

function mapStateToProps (state) {
    return {
        friendsData: state.navPage.friendsData
    }
}


export const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlock)