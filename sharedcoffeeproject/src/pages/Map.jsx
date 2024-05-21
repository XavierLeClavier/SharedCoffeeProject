import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = () => {
    useEffect(() => {
        const map = L.map('map').setView([45.7640, 4.8357], 12); // Coordonnées de Lyon

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        }).addTo(map);

        return () => map.remove();
    }, []);

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map;
