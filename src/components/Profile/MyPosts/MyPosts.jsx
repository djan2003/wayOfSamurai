import React from 'react';
import Post from "./post/Post";
import s from "./MyPosts.module.css"
import {addPostActionCreator, ubdateNewPostActionCreator} from "../../../redux/profileReduser";


const MyPosts = (props) => {
    let addPost = ()=>{
         props.dispatch(addPostActionCreator());

    }
    let onPostChange = ()=>{
        let text=newPostElement.current.value;
        props.dispatch(ubdateNewPostActionCreator(text));
    }
    let postElement = props.message.map(p =><Post age={p.name}/> )
    let newPostElement = React.createRef()
    return (
        <section className={s.AllBlock}>
            <div>
               <h2> My posts</h2>
            </div>
            <textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText}/>
            <div>
                <button onClick={addPost} >Add post</button>
            </div>
            <div>
                {postElement}
            </div>

        </section>
    );
};


export default MyPosts