import React from 'react';
import s from "./profileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.firsFoto}
                     src="https://avatars.mds.yandex.net/get-pdb/1491599/1d3cac8b-2410-4c51-8abe-453d701707c1/orig"></img>
            </div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    );
};


export default ProfileInfo