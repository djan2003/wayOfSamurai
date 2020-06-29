import React from 'react';
import s from './Header.module.css';
const Header = () => {
  return (
	<header className={s.header}>
  		<img className={s.logotip} src="https://avatars.mds.yandex.net/get-pdb/933338/94068ff5-61aa-43bd-909a-a47aade07a8b/orig"></img>
  	<div className={s.contentHeader}>Это моя социальная сеть</div>
	</header>
  );
};



export default Header