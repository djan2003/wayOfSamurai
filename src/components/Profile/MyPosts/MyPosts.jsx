import React from 'react';
import Post from "./post/Post";
import s from "./MyPosts.module.css"


const MyPosts = (props) => {
    let OnAddPost = ()=>{
         props.addPost();

    }
    let onPostChange = ()=>{
        let text=newPostElement.current.value;
        props.updateNewPost(text)
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
                <button onClick={OnAddPost} >Add post</button>
            </div>
            <div>
                {postElement}
            </div>

        </section>
    );
};


export default MyPosts