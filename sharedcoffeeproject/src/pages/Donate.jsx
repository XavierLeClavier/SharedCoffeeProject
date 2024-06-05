import React, { useState } from 'react';

import logo from '../img/logo.png';

function Donate() {
    const [currentCount, setCurrentCount] = useState(1);
    const subtotal = 2;

    const handlePlus = () => {
        setCurrentCount((prevCount) => prevCount + 1);
    };

    const handleMinus = () => {
        setCurrentCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
    <div className='md:grid md:grid-cols-2'>
        <section id="login" className=" flex flex-col justify-center min-h-screen max-w-md mx-auto">
            <div className="p-6 rounded">
                <div className="flex items-center justify-center font-black m-3 mb-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 mr-3 text-orange-700 animate-pulse"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <h1 className="tracking-wide text-3xl text-gray-900">
                        Pay your suspended coffee
                    </h1>
                </div>
                <form id="login_form" onSubmit={handleSubmit} className="flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-3">
                        <div className="inline-flex items-center self-start">
                            <img src={logo} className='w-12 mr-2' />
                            <span className="font-bold text-gray-900">€2 / Coffee</span>
                        </div>
                        <div className="flex">
                            <button type="button" onClick={handleMinus} className="bg-yellow-600 p-1.5 font-bold rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <input
                                id="item_count"
                                type="number"
                                value={currentCount}
                                className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5 block border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                            />

                            <button type="button" onClick={handlePlus} className="bg-green-600 p-1.5 font-bold rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <label className="text-sm font-medium">From</label>
                    <input
                        className="mb-3 py-1.5 mt-1 block w-full px-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                        type="text"
                        name="username"
                        placeholder="Your name"
                    />
                    <label className="text-sm font-medium">Messages (optional)</label>
                    <textarea
                        className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                        name="messages"
                        placeholder="Write something"
                    ></textarea>
                    <button
                        className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-green-600 to-blue-600 font-medium text-gray-100 block transition duration-300"
                        type="submit"
                    >
                        <span id="login_process_state" className="hidden">
                            Sending :)
                        </span>
                        <span id="login_default_state">
                            Donate<span id="subtotal"> ${subtotal * currentCount}</span>
                        </span>
                    </button>
                </form>
            </div>
        </section>
        <div className='my-auto mx-3'>
            <h3 className="mb-8 text-3xl font-bold">Pay your coffee in advance, have it given out for you !</h3>
            <p className="mb-8 text-lg font-light">
                You can pay for a coffee in advance, and we will give it out to someone in need. You can
                also leave a message for the person who will receive it !
            </p>
            <p className="mb-8 text-lg font-light">
                You can pay for as many coffees as you want, and we will give them out for you. The coffee
                shops are chosen from all the available affiliated coffee shops in Lyon !  
            </p>  
        </div>
        </div>
    );
}

// largely inspired by https://tailwindcomponents.com/u/wahyusa
export default Donate;