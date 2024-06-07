import React from 'react';
import { Link } from 'react-router-dom';

import LeftImageText from '../elements/RightImageText';
import MapElement from '../elements/MapElement';
import LinkButton from '../elements/LinkButton'

import 'leaflet/dist/leaflet.css';
import cosyCoffeeShop from '../img/coffeeshop-cosy2.jpg';

function Map() {
    return (
        <div className='flex justify-center flex-col'>
            <h1 className="mb-8 text-3xl font-bold text-center">Map</h1>
            <p className='mx-auto mb-2'>
                Our map regroups all coffeeshops, restaurants, fast-foods, and stores offering "suspended" items".
            </p>
            <div className="flex justify-center items-center mx-auto w-3/4">
                <MapElement />
            </div>
            <Link to='/contact' className='pt-4 mx-auto'>
                <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"

                    className="me-3 inline-block rounded bg-gradient-to-r to-green-600 from-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong transform hover:scale-105">
                    Add your shop !
                </button>
            </Link>
            <div className='flex justify-center'>
                <LeftImageText
                    title="Want to add your shop ?"
                    description={<div>
                        <p>If you want to add your coffee shop to our map, please contact us through the button below.</p>
                        <p>We accept all types of shops, as long as they offer services comparable to suspended coffees.</p>
                        <p>By joining our network, you'll be part of a community dedicated to promoting generosity and supporting
                            those in need. Your shop will also benefit from increased visibility and the opportunity to attract new
                            customers who value businesses with a social conscience.</p>
                        <p>We look forward to hearing from you and working together to make a positive impact in our community.
                            Thank you for your interest in becoming a part of our initiative!</p>
                    </div>}
                    imageSrc={cosyCoffeeShop}
                    alt="Cosy Coffee"
                />
            </div>
        </div>
    );
}

export default Map;
