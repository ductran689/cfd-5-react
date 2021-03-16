import React from 'react';

function Members({member_name,member_class}) {
    return (
        <div className="item col-md-3 col-sm-4 col-xs-6">
        <div className="wrap">
            <div className="cover">
                <img src="img/thumb-member.jpg" alt="" />
            </div>
            <div className="info">
                <div className="name">
                    {member_name}
  </div>
                <p className="title">{member_class}</p>
            </div>
        </div>
    </div>
  
    );
}

export default Members;