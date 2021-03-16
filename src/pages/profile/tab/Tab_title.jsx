import React from 'react';

function Tab_title({acc, course, pro, his, manage}) {
    return (
        <div className="tab-title">
        <a href="#" className="active">{acc}</a>
        <a href="#">{course}</a>
        <a href="#">{pro}</a>
        <a href="#">{his}</a>
        <a href="#">{manage}</a>
      </div>
      
    );
}

export default Tab_title;