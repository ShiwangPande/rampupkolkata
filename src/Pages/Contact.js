import React from 'react';
import call from "./call.svg";
import mail from "./mail.svg";
import logo from "../components/logo.png";

function Contact() {
    return (
        <div>
            
            <div class="flex flex-col-reverse lg:flex-row my-24 mx-auto max-w-[80%]">
                <div>
                    <iframe title="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.45159355749223!2d75.76222851608853!3d23.184340570882785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963753badfd22c9%3A0xb07439fafb91bd9d!2z4KSV4KS-4KSyIOCkuOCksOCljeCkqiDgpKrgpYLgpJzgpL4g4KS24KS-4KSC4KSk4KS_IOCkieCknOCljeCknOCliOCkqA!5e1!3m2!1sen!2sin!4v1689792748743!5m2!1sen!2sin" frameborder="0" class="map rounded-lg aspect-square min-h-[20rem] lg:aspect-video lg:h-fit "></iframe>
                    <div className='m-5  bg-gray-200 flex-row item-centers justify-center items-center gap-20 border rounded '>
                        <img src={call} className='my-2 w-20 mx-auto' alt="" />
                        <div className='flex flex-col  lg:flex-col '>
                            <h1 className='font-semibold mx-auto text-xl mb-3'>
                                Call us Directly at </h1>
                            {/* <br /> */}
                            <a className='font-semibold mx-auto text-blue-500 text-lg mb-3' href="tel:+91 98365 41411">
                                +91 98365 41411 </a>
                        </div>

                        {/* follow us and contact us */}

                    </div>
                    <div className='m-5  bg-gray-200 flex-row item-centers justify-center items-center gap-20 border rounded '>
                        <img src={mail} className='my-2 w-20 mx-auto ' alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold mx-auto text-xl mb-3'>
                                Email us at  </h1>
                            {/* <br /> */}
                            <a className='font-semibold mx-auto text-blue-500 text-lg mb-3' href="mailto:rampupkolkata@gmail.com">
                                rampupkolkata@gmail.com </a>
                        </div>

                        {/* follow us and contact us */}

                    </div>

                </div>

                <form class="w-full max-w-lg m-auto mt-36 mb-32 " action="https://formsubmit.co/rampupkolkata@gmail.com"
                    method="POST">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border-none rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"
                                name="name"

                                required />
                            {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p>  w */}
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-mail
                            </label>
                            <input class="form-control appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />

                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Message
                            </label>
                            <textarea class="form-control no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="query"

                                style={{ height: "150px" }}
                                placeholder="write your query here"
                                cols="30"
                                rows="10"
                                required></textarea>

                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Send
                            </button>
                            <input type="hidden" name="_next"
                                value="https://mesathank.netlify.app/" />
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact