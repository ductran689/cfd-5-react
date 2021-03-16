import React from 'react';

function Item_his({coin, time , content, status}) {
    return (
        <div className="itemhistory">
              <div className="td"><strong>{coin}</strong></div>
              <div className="td"><strong>time</strong></div>
              <div className="td"><strong>{content}</strong></div>
              <div className="td"><strong>{status}</strong></div>
            </div>
    );
}

export default Item_his;