import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t5dbax9', 'template_y5c7hwq', form.current, 'r0LRXul43PyfT8C6d')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='p-4 pt-10 lg:p-20 flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Contact Me</h2>
            <div>
                <div className='md:flex '>
                    <div className='lg:w-2/5 w-full my-auto flex  justify-center'>
                        <img className='w-1/2 h-1/2' src='../public/img/Noy_Nosrati.png' alt='contact me' />
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 lg:w-3/5 px-10">
                        <div className="lg:flex gap-9">
                            <input required name="user_name" className="w-full lg:my-3 my-4 rounded-lg bg-[#cfcff0] p-4  b_glow text-xl text-slate-600" placeholder="Enter Your Name" type="text" />
                            <input required name="user_email" className="w-full lg:my-3 my-4 rounded-lg bg-[#cfcff0] p-4  b_glow text-xl text-slate-600" placeholder="Enter Your Email" type="text" />
                        </div>
                        <textarea required className="w-full my-3 rounded-lg bg-[#cfcff0] p-4  b_glow text-xl text-slate-600" placeholder="Write Your Massage..." name="message" cols="20" rows="6"></textarea>
                        {/* <input type="submit" value="Send" className='border' /> */}
                        <button className="neno-button shadow-xl hover:shadow-indigo-400 text-white border-2 border-indigo-950 bg-indigo-950 hover:text-indigo-100 hover:bg-[#845ac9] rounded-lg py-4 px-8 my-6 uppercase  overflow-hidden b_glow text-xl" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};