import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import SemiTransparentImage from '../elements/SemiTransparentImage';
import LinkButton from '../elements/LinkButton';

import cosyCoffee from '../img/coffeeshop-cosy1.jpg';

function Accueil() {
    return (
        <div className="relative h-96 overflow-hidden bg-cover bg-[50%] bg-no-repeat" style={{ backgroundImage: `url(${cosyCoffee})` }}>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                <div className="flex h-full items-center justify-center">
                    <div className="px-6 text-center text-white md:px-12">
                        <h1 className="mb-6 text-5xl font-bold">The Shared Coffee Project</h1>
                        <h3 className="mb-8 text-3xl font-bold">It's not just a coffee, it's a warm place</h3>
                        <div className='justify-around flex'>
                            <Link to='/map'>
                                <LinkButton content="Find a coffee" />
                            </Link>
                            <Link to='/'>
                                <LinkButton content="Who are we ?" />
                            </Link>
                            <Link to='/contact'>
                                <LinkButton content="Contact us !" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accueil;