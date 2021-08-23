import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../common/FormControls/FormsControls";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import s from "../../Dialogs.module.css";

const maxLenght30=maxLenghtCreator(30)

const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} className={s.submitMesage}>
            <div>
                <Field className={s.textA}
                       component={Textarea}
                       validate={[required, maxLenght30]}
                       name="newMessageBody"
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button className={s.sendButton}>Send </button></div>
        </form>);
}

export default reduxForm ({form:"dialogAddMessageForm"}) (AddMessageForm)
