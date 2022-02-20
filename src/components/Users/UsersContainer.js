import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/reducers/usersReducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);