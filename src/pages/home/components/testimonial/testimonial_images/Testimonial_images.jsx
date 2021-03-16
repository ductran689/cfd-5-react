import React from 'react';
import Carousel from './Carousel'
function Testimonial_images(props) {
    return (
        <div className="images">
            <div className="list">
                <Carousel name='Duy Đức' class_name='CFD5' content='asdadasdas' date='15/03/2021' />
                <Carousel name='Duy Đức 1' class_name='CFD6' content='asdadasdas' date='16/03/2021' />
                <Carousel name='Duy Đức 2' class_name='CFD7' content='asdadasdas' date='17/03/2021' />
             </div>
        </div>
    );
}

export default Testimonial_images;