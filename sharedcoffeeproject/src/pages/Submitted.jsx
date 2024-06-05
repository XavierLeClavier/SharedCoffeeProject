import { Link } from 'react-router-dom';
import React from 'react';

import LinkButton from '../elements/LinkButton';

import cosyCoffee from '../img/coffee-cosy1.jpg';

export default function Submitted() {
    return (
        <div className='text-center h-screen'>
            <div className="h-full bg-cover bg-[50%] bg-no-repeat" style={{ backgroundImage: `url(${cosyCoffee})` }}>
                <div className="h-full w-full bg-black/60 ">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h1 className="mb-6 text-5xl font-bold">Thank you for submitting your shop !</h1>
                            <h3 className="mb-8 text-3xl font-bold">Our team will contact you shortly with an answer...</h3>
                            <div className='justify-around flex'>
                                <Link to='/map'>
                                    <LinkButton content="Check the map" />
                                </Link>
                                <Link to='/'>
                                    <LinkButton content="Head home" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}