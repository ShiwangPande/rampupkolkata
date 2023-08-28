import React from 'react'
import "../App.css"
function About() {
    return (
        <div className='  '>
            <h1 className='about-us'>About Us</h1>
            <div className='sqaure'></div>
            <img className='about-img' src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <div className=' mx-12 tracking-wide leading-loose text-justify text-xl italic font-semibold'>
                <span className='text-5xl firstLetter'>A</span>vyaya Kheria is a class 12 student from South City International School. He is the founder of Ramp Up Kolkata, which he initiated to improve the lives of several disabled people in his city. He’s a passionate advocate of change and progress of society. He is also the co-founder of a non-profit organisation, TechoTeen, which imparts vocational education to teenagers. Apart from his social activities, he is a passionate athlete, avid researcher and quizzer.
                He will forever be found watching sports with a cup of coffee.
            </div>
        </div>
    )
}

export default About