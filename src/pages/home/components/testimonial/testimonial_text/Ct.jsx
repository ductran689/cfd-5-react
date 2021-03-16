import React from 'react';

function Ct({name, class_name, content,date}) {
    return (
        <div className="ct ct-1"  >
        <div className="info">
            <div className="name">
                <h4>{name}</h4>
                <p>{class_name}</p>
            </div>
            <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
        </div>
        <div className="content">
            {content}
</div>
        <div className="bottom">
            <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
            <span>{date}</span>
        </div>
    </div>

    );
}

export default Ct;