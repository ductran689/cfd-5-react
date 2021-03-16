import React from 'react';

function Tab2_item({name,date, hours, videos, members}) {
    return (
        <div className="item">
            <div className="cover">
              <img src="img/img3.png" alt="" />
            </div>
            <div className="info">
              <a href="#" className="name">
                {name}
                </a>
              <div className="date">date</div>
              <div className="row">
                <div className>
                  <img src="img/clock.svg" alt="" className="icon" />{hours}
                  </div>
                <div className>
                  <img src="img/play.svg" alt="" className="icon" />{videos}
                  </div>
                <div className>
                  <img src="img/user.svg" alt="" className="icon" />{members}
                  </div>
              </div>
              <div className="process">
                <div className="line">
                  <div className="rate" style={{ width: '30%' }} />
                </div>
                  30%
                </div>
              <div className="btn overlay round btn-continue">
                Tiếp tục học
                </div>
            </div>
          </div>
          
    );
}

export default Tab2_item;