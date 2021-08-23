import React, {useEffect, useState} from 'react';
import s from './Post.module.css';
import avatar from "../../../../assets/images/avatar.png"



const Post = (props) => {
    let [like,setLike] = useState( props.likesCount);

    useEffect( () => {
        setLike(props.status);
    },[props.likesCount]);

    const likeCount = () =>{
       setLike(props.likesCount+1) ;
    }


  return (
    <div className={s.item}>
        <div>
      <img src={avatar} />
        </div>
        <span className={s.messageText}>{ props.message }</span>

        <div className={s.likesCoumt}>
             <button onClick={likeCount} className={s.likeCountsButton}> like </button> {like ||  props.likesCount }
      </div>
    </div>
  )
}

export default Post;