import React from 'react';

function Mentor({mentor_name, mentor_title}) {
    return (
        <div className="item col-md-6 col-sm-6">
        <div className="wrap">
          <div className="cover">
            <img src="img/thumb-member.jpg" alt="" />
          </div>
          <div className="info">
            <div className="name">
              {mentor_name}
            </div>
            <p className="title">{mentor_title}r &amp; Creative Front-End Developer</p>
          </div>
        </div>
      </div>
   
    );
}

export default Mentor;