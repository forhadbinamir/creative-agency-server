import React, { useState } from 'react';

const ClientsFeedback = () => {
    const feedBack = [
        {
            _id: 1,
            picture: 'https://i.ibb.co/k0QcJVR/customer-3.png',
            name: 'Nash Patrik',
            designation: 'CEO Manpol',
            description: "If you have ever taken a design or art class, you may already be familiar with design critiques. But as you grow as a designer, how do you know what to look out for when giving and receiving a design critique? we’ll share our tips.!"
        },
        {
            _id: 2,
            picture: 'https://i.ibb.co/gWh50d7/customer-1.png',
            name: 'Mirian Baron',
            designation: 'CEO Manpol',
            description: " You may already be familiar with design critiques. But as you grow as a designer, how do you know what to look out for when giving and receiving a design critique? In this article, we’ll share our tips."
        },
        {
            _id: 3,
            picture: 'https://i.ibb.co/SdQ2H4f/customer-2.png',
            name: 'Bria Malone',
            designation: 'CEO Manpol',
            description: "If you have ever taken a design or art class, you may already be familiar with design critiques. But as you grow as a designer, how do you know what to look out for when giving and receiving a design critique? In this article, we’ll share our tips."
        },
    ]
    const [clientReview, setClientReview] = useState([])

    return (
        <div className='py-28 px-12'>
            <h2 className='text-4xl font-bold text-center p-14'>Clients <span className='text-green-700 '>Feedback</span> </h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 '>
                {
                    feedBack.map(client => {

                        return (
                            <div className='border rounded-lg p-5 hover:translate-y-5 duration-300 shadow-2xl'
                                key={client._id}
                            >
                                <div className='flex justify-start items-center'>
                                    <img className='w-24' src={client?.picture} alt="" />
                                    <div className='pl-3'>
                                        <h1 className='text-1xl font-bold'>{client?.name}</h1>
                                        <h3 className='font-semibold'>{client?.designation}</h3>
                                    </div>
                                </div>

                                <p>{client?.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ClientsFeedback;