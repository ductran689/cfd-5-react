import React from 'react';
import { Link } from 'react-router-dom';


function check_status(status){
if (status==='dang-dien-ra'){
  <span className="badge b2">Đang diễn ra</span>
} else if(status==='da-ket-thuc'){
  <span className="badge b1">Đã kết thúc</span>
} else{
  <span className="badge b3">Sắp diễn ra</span>
}
}


function Course({name, status, des, image, teacher_name, teacher_img} ) {

 


    return (
        <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src={image} alt="" />
                      {
                        check_status (status)
                        /* status === 'dang-dien-ra' ?
                        <span className="badge b1">Đang diễn ra</span>
                        :( status ===' da-ket-thuc'?
                        <span className="badge b1">Đã kết thúc</span>
                        :  <span className="badge b1">Sắp khai giảng</span>) */
                      }
                     
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        {name}
                      </a>
                      <p className="des">
                        {des}
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src={teacher_img} alt="" />
                        </div>
                        <div className="name">{teacher_name}</div>
                      </div>
                      <Link className="register-btn" to='/register'>Đăng Ký</Link>
                    </div>
                  </div>
                  </div>

    );
}

export default Course