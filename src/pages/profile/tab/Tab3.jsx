import React from 'react';
import Tab3_item from './Tab3_item';

function Tab3(props) {
    return (
        <div className="tab3" >
          <div className="row">
            <Tab3_item name='' des='' teacher_name='' img='/img/img1.png' />
            <Tab3_item name='' des='' teacher_name='' img='/img/img5.png' />
            </div>
          <div className="btn-wrap">
            <div className="btn overlay btn-icon round">
              <img src="/img/icon-upload.svg" alt="" /> Tải lên
              </div>
          </div>
        </div>
        
    );
}

export default Tab3;