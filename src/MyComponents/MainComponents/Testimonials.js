import React from 'react'

export default function Testimonials() {
    return (
        <>
            <section id="testimonial" className="testimonial">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Testimonials</h2>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box iconbox-blue">
                                <div className="icon">
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                </div>
                                <h4><a href="">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box iconbox-orange ">
                                <div className="icon">
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                </div>
                                <h4><a href="">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box iconbox-pink">
                                <div className="icon">
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                </div>
                                <h4><a href="">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}