import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function Tab_title({url}) {
  
    return (
        <div className="tab-title">
        <NavLink exact to={url}>Thông tin tài khoản</NavLink> {/* nhớ để ý exact khi xử lý Navlink để gắn class active cho thẻ tag */}
        <NavLink to={url+'/course'}>Khóa học của bạn</NavLink>
        <NavLink to={url+'/project'}>Dự án đã làm</NavLink>
        <NavLink to={url+'/history-payment'}>Lịch sử thanh toán</NavLink>
        <NavLink to={url+'/coin'}>Quản lý COIN của tôi</NavLink>
      </div>
      
    );
}

export default Tab_title;