import classes from './Users.module.css'
import axios from "axios";
import Avatar from "../../img/Avatar.png";

let UsersFunctional = (props) => {

    let getUsers = () => {

        if (props.usersData.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={classes.userImage} src={u.photos.small ? u.photos.small : Avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
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

export default UsersFunctional;