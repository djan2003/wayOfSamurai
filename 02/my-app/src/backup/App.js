import React from 'react';
import './App.css';


const App = () => {
  return (
<section className="app-wrapper">
  	<header className="header">
  		<img className="logotip" src="https://avatars.mds.yandex.net/get-pdb/933338/94068ff5-61aa-43bd-909a-a47aade07a8b/orig"></img>
  	</header>
    <nav className="nav">
    	<ul>
    		<li> <a href="#">ссылка</a></li>
    		<li> <a href="#">ссылка</a></li>
    		<li> <a href="#">ссылка</a></li>
    		<li> <a href="#">ссылка</a></li>
    	</ul>
    </nav>
    <div className="content">
    	<div>
    		<img className="firsFoto" src="https://avatars.mds.yandex.net/get-pdb/1491599/1d3cac8b-2410-4c51-8abe-453d701707c1/orig"></img>
    	</div>
    	<div>
    		ava + description
    	</div>
    	<div>
    		my posts
    	</div>
    	<div> new posts
    		<div>post1</div>
    		<div>post2</div>
    	</div>
    </div>
</section>
  );
};



export default App;
