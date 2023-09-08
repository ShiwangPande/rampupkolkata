import Achievement from '../components/Achievement';
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import logo from "../components/logo.png";
function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <>


            <div className='lg:flex lg:flex-row flex flex-col mt-32 lg:mx-12 mx-5  '>
                {/* <div className=''> */}

                <img className='lg:w-[275px] w-fit' src="https://images.unsplash.com/photo-1687360440667-493016988a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />

                {/* </div> */}
                <div className='flex-1 lg:mx-10 mx-5 text-xl '>
                    <h1 className='text-5xl font-extrabold my-5'> Ramp Up Kolkata </h1>

                    <p className='mt-5   tracking-wide leading-loose text-justify'>
                        <blockquote class="text-xl italic leading-loose font-semibold text-gray-900 dark:text-white">
                            <svg class="w-8 h-8  text-[#4a4a4a] dark:text-gray-600 mb-4" style={{ transform: "rotateZ(180deg)" }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <p> ‘Ramp Up Kolkata’ is an initiative aimed at placing wheelchair ramps at different locations across the city to improve the lives of the disabled. Over 30000 residents of Kolkata are physically disabled. This has impacted their lives both physically and mentally as many public spots have become inaccessible to them. Wheelchair ramps will superficially able the disabled. As a part of this initiative, we aim to improve the lives of atleast 15000 people by providing them with means to move freely.</p>
                            <svg class="w-8 h-8 text-[#4a4a4a] dark:text-gray-600 mt-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                        </blockquote>
                    </p>
                </div>
            </div>
            <div>
                {/* about us  */}
                <div className='lg:flex lg:flex-row  flex flex-col mt-32 lg:mx-12 mx-5  '>
                    <div className='flex-1 lg:mx-10 mx-5 text-xl'>

                        <h1 className='text-5xl font-extrabold my-8 text-center'> About Us </h1>

                        <motion.div
                            ref={ref}
                            variants={{
                                hidden: { opacity: 0, y: 100 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <p className='my-5   tracking-wide text-xl italic leading-loose font-semibold text-justify text-gray-900 dark:text-white'>
                                Avyaya Kheria is a class 12 student from South City International School. He is the founder of Ramp Up Kolkata, which he initiated to improve the lives of several disabled people in his city. He’s a passionate advocate of change and progress of society. He is also the co-founder of a non-profit organisation, TechoTeen, which imparts vocational education to teenagers. Apart from his social activities, he is a passionate athlete, avid researcher and quizzer.
                                He will forever be found watching sports with a cup of coffee.    </p>
                        </motion.div>
                    </div>
                </div>
                <Achievement />
            </div>
        </>
    )
}

export default Home