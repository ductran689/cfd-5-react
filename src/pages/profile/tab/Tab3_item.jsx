import React from 'react';

function Tab3_item({name, des, teacher_name,img}) {
    return (
        <div className="col-md-6 course">
              <div className="wrap">
                <a href="#" className="cover">
                  <img src={img} alt="" />
                </a>
                <div className="info">
                  <a href="#" className="name">
                    {name}
                    </a>
                  <p className="des">
                    {des}
                    </p>
                </div>
                <div className="bottom">
                  <div className="teacher">
                    <div className="avatar">
                      <img src="img/avt.png" alt="" />
                    </div>
                    <div className="name">{teacher_name}</div>
                  </div>
                  <div className="register-btn">Website</div>
                </div>
              </div>
            </div>
            
    );
}

export default Tab3_item;