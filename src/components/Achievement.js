import React from 'react'
import CountUp from 'react-countup';
import "./achievement.css";
import location from './location.svg';
import people from './people.svg';
import ngo from './ngo.png';
import volunteer from "./volunteer.svg"
function Achievement() {
    return (
        <div className='count-group'>
            <div className='count'>
                <img src={location} alt="" />
                <CountUp start={0} end={20} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />+

                        </div>
                    )}
                </CountUp>
                <h3>locations</h3>
            </div>
            <div className='count'>
                <img src={people} alt="" />
                <CountUp start={0} end={15} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />k+


                        </div>
                    )}
                </CountUp>
                <h3>people</h3>
            </div>
            <div className='count'>
                <img src={ngo} alt="" />
                <CountUp start={0} end={5} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />+



                        </div>
                    )}
                </CountUp>
                <h3> NGOs</h3>
            </div>
            <div className='count'>
                <img src={volunteer} alt="" />
                <CountUp start={0} end={30} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />+



                        </div>
                    )}
                </CountUp>
                <h3>volunteers</h3>
            </div>
        </div>
    )
}

export default Achievement