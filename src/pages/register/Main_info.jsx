import React from 'react';

function Main_info({date, duration,fee}) {
    return (
        <div className="main-info">
        <div className="date"><strong>Khai giảng:</strong> {date}</div>
        <div className="time"><strong>Thời lượng:</strong> {duration}</div>
        <div className="time"><strong>Học phí:</strong> {fee}</div>
      </div>
   
    );
}

export default Main_info;