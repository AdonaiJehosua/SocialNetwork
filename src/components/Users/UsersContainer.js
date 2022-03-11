import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow
} from "../../redux/reducers/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       usersData={this.props.usersData}
                       currentPage={this.props.currentPage}
                       followindInProgress={this.props.followindInProgress}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followindInProgress: state.usersPage.followindInProgress
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    })
(UsersContainer);