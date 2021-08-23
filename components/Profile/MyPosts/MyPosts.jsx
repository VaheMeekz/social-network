import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field,reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";


const maxLenght10 = maxLenghtCreator(10);

let AddNewPostForm =  (props) =>  {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.textA}
                    name="newPostText"
                    component={Textarea}
                    placeholder={"Post Message"}
                    validate={[required, maxLenght10]}

                />
            </div>
            <div>
                <button className={s.sendButton}>Add post</button>
            </div>
        </form>

    );
}

let AddNewPostFormRedux = reduxForm ({form: "ProfileAddNewPostForm" }) (AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h1>My posts</h1>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>
                    { postsElements }
                </div>
        </div>
    )
}

export default MyPosts;