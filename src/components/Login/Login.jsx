import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormControls/FormsControls.module.css"


 const LoginForm = ({handleSubmit,error}) =>{
    return(
            <form className={styles.loginFormBody} onSubmit={handleSubmit}>
                <div>
                    <Field placeholder={"Email"}
                           validate={[required]}
                           name={"email"} component={Input}
                           className={styles.loginInput}
                    />
                </div>
                <div>
                    <Field placeholder={"Password"}   className={styles.loginInput}
                           validate={[required]} type={"password"}
                           name={"password"} component={Input}/>
                </div>
                <div>
                    <Field component={Input}  name={"rememberMe"}
                           type={"checkbox"}/> Remember me
                </div>
                { error &&
                    <span className={styles.formSumaryError}>
                    {error}
                </span>}
                <div>
                    <button className={styles.loginButton}>Login</button>
                </div>
            </form>
            );
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) =>{
     const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
     }
     if(props.isAuth){
         return <Redirect to={"/profile"}/>
     }
     return <div>
            <h1 className={styles.loginBody}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
         </div>

 }



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

 export default connect (mapStateToProps,{login}) (Login);