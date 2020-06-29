import React from 'react';
import s from "./post.module.css"
const Post = (props) => {
	return (
		<div className={s.content}>

				  <img  src="https://avatars.mds.yandex.net/get-pdb/1211668/17b85b01-aef6-44aa-a372-945911d8600f/s1200"></img>
			{props.age}
			  </div>

  );
};



export default Post