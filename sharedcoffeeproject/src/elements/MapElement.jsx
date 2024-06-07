import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 

import locationImg from '../img/location.png';

const customIcon = new L.Icon({
    iconUrl: locationImg,
    iconSize: [30, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32], 
});

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position} icon={customIcon}>
            <Popup>
                You are here
            </Popup>
        </Marker>
    );
}

export default function MapElement() {
    return (
        // Map with markers for different cafes
        <MapContainer center={[45.74846000, 4.84671000]} zoom={13} scrollWheelZoom={false} className="w-full h-96">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Each marker is a cafe with a popup showing its name and address */}
            <LocationMarker />
            <Marker position={[45.754890, 4.844490]}>
                <Popup>
                    De l'autre côté du pont<br />
                    25 Cours Gambetta, 69003
                </Popup>
            </Marker>
            <Marker position={[45.749040, 4.839010]}>
                <Popup>
                    Chères Cousines<br />
                    35 rue Chevreul 69007
                </Popup>
            </Marker>
            <Marker position={[45.753660, 4.830480]}>
                <Popup>
                    Le Café des Antiquaires<br />
                    40 rue Auguste Comte, 69002
                </Popup>
            </Marker>
            <Marker position={[45.768690, 4.835910]}>
                <Popup>
                    Le Laboratoire<br />
                    22 Rue Terraille, 69001
                </Popup>
            </Marker>
            <Marker position={[45.779410, 4.834400]}>
                <Popup>
                    Des Galets Bleus la Nuit<br />
                    18 Rue Pailleron, 69004
                </Popup>
            </Marker>
            <Marker position={[45.779410, 4.834400]}>
                <Popup>
                    Praline et fleur de sel<br />
                    95 Rue de Gerland, 69007
                </Popup>
            </Marker>
            <Marker position={[45.754050, 4.839320]}>
                <Popup>
                    L'épicerie équitable<br />
                    78 Rue Montesquieu, 69007
                </Popup>
            </Marker>
            <Marker position={[45.771141, 4.831670]}>
                <Popup>
                    Un petit noir<br />
                    57 Montee de la Grande Cote, 69001
                </Popup>
            </Marker>
            <Marker position={[45.751630, 4.843190]}>
                <Popup>
                    Le court circuit<br />
                    13 Rue Jangot, 69007
                </Popup>
            </Marker>
            <Marker position={[45.756910, 4.850370]}>
                <Popup>
                    Aklé<br />
                    85 Rue Paul Bert, 69003
                </Popup>
            </Marker>
            <Marker position={[45.757530, 4.834150]}>
                <Popup>
                    Café Cousu<br />
                    16 Place Bellecour, 69002
                </Popup>
            </Marker>
            <Marker position={[45.767960, 4.856680]}>
                <Popup>
                    Café Pain / The Coffee<br />
                    175 Rue Cuvier, 69006
                </Popup>
            </Marker>
        </MapContainer>
    );
};
