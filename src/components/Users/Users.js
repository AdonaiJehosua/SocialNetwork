import React from "react";
import classes from "./Users.module.css";
import Avatar from "../../img/Avatar.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
            {props.usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt={''} className={classes.userImage} src={u.photos.small ? u.photos.small : Avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followindInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>
                                Unfollow</button>
                            : <button disabled={props.followindInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>
                                Follow</button>}
                    </div>
                </span>
                    <span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                    <span>
                    <div>{'u.location.city'}</div><div>{'u.location.country'}</div>
                </span>
                </div>
            )}
        </div>
    )
}

export default Users;