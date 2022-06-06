import React, { useState } from 'react';

const ClientsFeedback = () => {
    const feedBack = [
        {
            _id: 1,
            picture: 'https://i.ibb.co/k0QcJVR/customer-3.png',
            name: 'Nash Patrik',
            designation: 'CEO Manpol',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia dolorem ex provident error necessitatibus eligendi, ullam magnam esse cum tenetur amet, est quis pariatur a sed libero earum quod sapiente!"
        },
        {
            _id: 2,
            picture: 'https://i.ibb.co/gWh50d7/customer-1.png',
            name: 'Mirian Baron',
            designation: 'CEO Manpol',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia dolorem ex provident error necessitatibus eligendi, ullam magnam esse cum tenetur amet, est quis pariatur a sed libero earum quod sapiente!"
        },
        {
            _id: 3,
            picture: 'https://i.ibb.co/SdQ2H4f/customer-2.png',
            name: 'Bria Malone',
            designation: 'CEO Manpol',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia dolorem ex provident error necessitatibus eligendi, ullam magnam esse cum tenetur amet, est quis pariatur a sed libero earum quod sapiente!"
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
                            <div className='border rounded-lg p-5'
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