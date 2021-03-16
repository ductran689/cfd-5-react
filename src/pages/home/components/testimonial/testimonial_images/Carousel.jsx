import React from 'react';

function Carousel({name,class_name, content,date}) {
    return (
        <div className="carousel-cell">
            <div className="img">
                <picture>
                    <source media="(max-width: 767px)" srcSet="/img/Intersect.png" />
                    <img data-flickity-lazyload="img/tes.jpg" alt="" />
                </picture>
            </div>
            <div className="ct_m">
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
        </div>

    );
}

export default Carousel;