import React from "react";
import classes from "./Users.module.css";
import Avatar from "../../img/Avatar.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    console.log('yo')
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && classes.selected}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={classes.userImage} src={u.photos.small ? u.photos.small : Avatar}/>
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
                </div>)
            }
        </div>
    )
}

export default Users;