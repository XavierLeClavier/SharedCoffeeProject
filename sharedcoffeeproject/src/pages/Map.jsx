import React from 'react';
import MapElement from '../elements/MapElement';
import 'leaflet/dist/leaflet.css';

function Map() {
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Map</h1> 
            <div className="flex justify-center items-center mx-auto w-3/4">
                <MapElement />
            </div>
        </div>
    );
}

export default Map;
