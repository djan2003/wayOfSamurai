import React from 'react';
import Post from "./post/Post";
import s from "./MyPosts.module.css"


const MyPosts = () => {
    let message = [
        {name : "10", id : 1},
        {name : "а тебе зачем это знать", id : 2},
        {name : "еще одна проверка", id : 2}
    ]
    let postElement = message.map(p =><Post age={p.name}/> )
    return (
        <section className={s.AllBlock}>
            <div>
               <h2> My posts</h2>
            </div>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>
            <div>
                {postElement}
            </div>

        </section>
    );
};


export default MyPosts