import React from 'react';
import { Link } from 'react-router-dom';
import MapElement from '../elements/MapElement';
import 'leaflet/dist/leaflet.css';

function Map() {
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Map</h1> 
            <div className="flex justify-center items-center mx-auto w-3/4">
                <MapElement />
            </div>
            <div>
                <h3 className="mb-8 text-3xl font-bold">Want to add your shop ?</h3>
                <p>
                    If you want to add your coffee shop to our map, please contact us at <Link to='/contact'>this page</Link>
                </p>
            </div>
        </div>
    );
}

export default Map;
