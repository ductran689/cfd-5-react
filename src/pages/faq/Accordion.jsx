import React from 'react';

function Accordion({ques,ans}) {
    return (
        <div className="accordion">
        <div className="accordion__title">
          <h2><strong>{ques}</strong></h2>
        </div>
        <div className="content">
          {ans}
        </div>
      </div>
      
    );
}

export default Accordion;