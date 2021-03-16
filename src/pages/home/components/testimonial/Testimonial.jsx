import React from 'react';
import Testimonial_text from './testimonial_text/Testimonial_text';
import Testimonial_images from './testimonial_images/Testimonial_images'
function Testimonial(props) {
    return (
        <section className="section-testimonial">
            <div className="container">
                <div className="textbox">
                    <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
                </div>
                <div className="testimonial">
                    <div className="testimonial-item">
                        <div className="item">
                            <Testimonial_text />
                            <Testimonial_images/>
                        </div>
                        <div className="dots" />
                        <div className="btn_ctr prev" />
                        <div className="btn_ctr next" />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Testimonial;