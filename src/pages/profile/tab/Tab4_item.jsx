import React from 'react';

function Tab4_item({name, date, money}) {
    return (
        <div className="item itemhistory">
            <div className="name">{name}</div>
            <div className="date">{date}</div>
            <div className="money">money</div>
        </div>

    );
}

export default Tab4_item;