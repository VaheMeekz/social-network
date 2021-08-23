import React from 'react';
import styles from "./users.module.css";
import Paginator from "../Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {


    return <div className={styles.userPageBody}>

        <h1 className={styles.userPar}>Users</h1>
        <h4 className={styles.userPageBodyText}>You can follow them</h4>
        <h4 className={styles.userPageBodyText}>Click and to see the details</h4>


        {
            users.map(u => <User key={u.id} user={u}
                                 follow={props.follow} unfollow={props.unfollow}
                                 followingInProgress={props.followingInProgress}/>)
        }
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>

    </div>
}

export default Users;