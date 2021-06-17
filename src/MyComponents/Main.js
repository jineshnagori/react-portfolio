import React from 'react'
import About from "./MainComponents/About.js"
import Facts from "./MainComponents/Facts.js"
import Skills from "./MainComponents/Skills.js"
import Resume from "./MainComponents/Resume.js"
import Portfolio from "./MainComponents/Portfolio.js"
import Service from "./MainComponents/Service.js"
import Testimonials from "./MainComponents/Testimonials.js"
import Contact from "./MainComponents/Contact.js"

export default function Main() {
    return (
        <>
            <main id="main">
                <About/>
                <Facts/>
                <Skills/>
                <Resume/>
                <Portfolio/>
                <Service/>
                <Testimonials/>
                <Contact/>
            </main>
        </>
    )
}
