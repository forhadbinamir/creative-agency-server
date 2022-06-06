import React from 'react';
import contact from '../../images/contact/contact.svg'
const Contact = () => {
    return (
        <div className='py-20'>
            <h2 className='text-4xl font-bold text-center text-green-700 p-5'>Contact <span className=' '>Us</span> </h2>

            <div className='flex flex-col lg:flex-row justify-between p-12'>
                <div className='basis-1/2'>
                    <img src={contact} alt="" />
                </div>
                <div className='basis-1/2 px-10 py-10 bg-indigo-300'>
                    <h2 className='text-2xl font-semibold pb-10 text-white'>Let us handle you project professionally</h2>
                    <form>
                        <input className='w-full p-3 mb-2 rounded border' type="text" placeholder='Name' />
                        <input className='w-full p-3 mb-2 rounded border' type="email" placeholder='Email' />
                        <input className='w-full p-3 mb-2 rounded border' type="text" placeholder='Subject' />
                        <textarea placeholder='Message' className='w-full border pl-3' name="" id="" cols="30" rows="5"></textarea>
                        <button className='btn btn-accent'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;