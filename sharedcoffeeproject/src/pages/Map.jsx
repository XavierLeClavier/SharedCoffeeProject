import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CarteXavier = () => {
    return (
        <MapContainer center={[45.74846000, 4.84671000]} zoom={13} scrollWheelZoom={false} className="w-full h-96">   
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[45.74846000, 4.84671000]}>
                <Popup>
                    Here we write<br />the infos of the coffeshop     
                </Popup>
            </Marker>
        </MapContainer>
    );
};

function Map() {
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Map</h1> {/* Tailwind for styling the heading */}
            <div className="flex justify-center items-center">
                <CarteXavier />
            </div>
        </div>
    );
}

export default Map;
