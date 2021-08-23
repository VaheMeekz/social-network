import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect( () => {
        setStatus(props.status);
    },[]);

    const activeteEditMode = () => {
      setEditMode( true );
    }

    const  deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status);
    }

    const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div onDoubleClick={activeteEditMode}>
                Status ---->>
                <span>{props.status || "-----"}</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode}
                       value={status}
                       onChange={onStatusChange}/>
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;