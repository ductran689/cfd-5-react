import React from 'react';
import Accordion from './Accordion'
function Accordion_wrap(props) {
    return (
        <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">Thông tin chung</h3>
              <Accordion ques='' ans='' />
              <Accordion ques='' ans='' />
              <Accordion ques='' ans='' />
              </div>
              
    );
}

export default Accordion_wrap;