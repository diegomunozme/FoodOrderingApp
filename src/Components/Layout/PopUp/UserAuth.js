import React from "react";
import Card from "../../UI/Modal/Card/Card";
import classes from './UserAuth.module.css'

const UserAuth = (props)=>{
    <div className={classes.backdrop}>
        <Card>
            Hello!!
            <button onClick={props.onConfirm}>Close</button>
        </Card>
    </div>

}

export default UserAuth;