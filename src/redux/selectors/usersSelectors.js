import {createSelector} from "@reduxjs/toolkit";

const getUsers = (state) => {
    return (
        state.usersPage.usersData
    )
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(users => true)
})

export const getPageSize = (state) => {
    return (
        state.usersPage.pageSize
    )
}
export const getTotalUsersCount = (state) => {
    return (
        state.usersPage.totalUsersCount
    )
}
export const getCurrentPage = (state) => {
    return (
        state.usersPage.currentPage
    )
}
export const getIsFetching = (state) => {
    return (
        state.usersPage.isFetching
    )
}
export const getFollowindInProgress = (state) => {
    return (
        state.usersPage.followindInProgress
    )
}