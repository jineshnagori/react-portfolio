import React from 'react'

export default function Skills() {
    let style_1 = {width: '100%'};
    let style_2 = {width: '90%'};
    let style_3 = {width: '75%'};
    let style_4 = {width: '80%'};
    let style_5 = {width: '90%'};
    let style_6 = {width: '60%'};
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row skills-content">

                    <div className="col-lg-6">

                        <div className="progress">
                        <span className="skill">HTML <i className="val">100%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" style={style_1}></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">CSS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" style={style_2}></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">JavaScript <i className="val">75%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" style={style_3}></div>
                        </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="progress">
                        <span className="skill">PHP <i className="val">80%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" style={style_4}></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" style={style_5}></div>
                        </div>
                        </div>

                        <div className="progress">
                        <span className="skill">Photoshop <i className="val">60%</i></span>
                        <div className="progress-bar-wrap">
                            <div className="progress-bar" style={style_6}></div>
                        </div>
                        </div>

                    </div>

                    </div>

                </div>
            </section>
        </>
    )
}
