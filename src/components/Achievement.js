import React from 'react'
import "./achievement.css";
import location from './location.svg';
import people from './people.svg';
import ngo from './ngo.png';
import volunteer from "./volunteer.svg";
import { useSpring, animated } from 'react-spring';
function Achievement() {
    const number1Props = useSpring({
        from: { number: 0 },
        to: { number: 20 },
        config: { duration: 2000 },
    });
    const number2Props = useSpring({
        from: { number: 0 },
        to: { number: 15 },
        config: { duration: 1500 },
    });
    const number3Props = useSpring({
        from: { number: 0 },
        to: { number: 5 },
        config: { duration: 1500 },
    });
    const number4Props = useSpring({
        from: { number: 0 },
        to: { number: 30 },
        config: { duration: 1500 },
    });
    return (
        <div className='count-group'>
            <div className='count'>
                <img src={location} alt="" />
                {/* <CountUp start={0} end={20} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />

                        </div>
                    )}
                </CountUp> */}
                <div className='num'>
                    <animated.span>{number1Props.number.interpolate((val) => Math.floor(val))}</animated.span>+
                </div>
                <h3>locations</h3>
            </div>
            <div className='count'>
                <img src={people} alt="" />
                {/* <CountUp start={0} end={15} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />k+


                        </div>
                    )}
                </CountUp> */}
                <div className='num'>
                    <animated.span>{number2Props.number.interpolate((val) => Math.floor(val))}</animated.span>K+
                </div>
                <h3>people</h3>
            </div>
            <div className='count'>
                <img src={ngo} alt="" />
                {/* <CountUp start={0} end={5} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />+



                        </div>
                    )}
                </CountUp> */}
                <div className='num'>
                    <animated.span>{number3Props.number.interpolate((val) => Math.floor(val))}</animated.span>+
                </div>
                <h3> NGOs</h3>
            </div>
            <div className='count'>
                <img src={volunteer} alt="" />
                {/* <CountUp start={0} end={30} delay={2}>
                    {({ countUpRef }) => (
                        <div className='num'>
                            <span ref={countUpRef} />+



                        </div>
                    )}
                </CountUp> */}
                <div className='num'>
                    <animated.span>{number4Props.number.interpolate((val) => Math.floor(val))}</animated.span>+
                </div>
                <h3>volunteers</h3>
            </div>
        </div>
    )
}

export default Achievement