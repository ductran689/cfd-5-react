import React from 'react';

function Top_info({name, desc}) {
    return (
        <div className="top-info">
            <div className="avatar">
                {/* <span class="text">H</span> */}
                <img src="img/avatar-lg.png" alt="" />
                <div className="camera" />
            </div>
            <div className="name">{name}</div>
            <p className="des">{desc}</p>
        </div>

    );
}

export default Top_info;