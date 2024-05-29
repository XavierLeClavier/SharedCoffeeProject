import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapElement() {
    return (
        //Ici on a une carte avec des marqueurs pour les différents cafés
        <MapContainer center={[45.74846000, 4.84671000]} zoom={13} scrollWheelZoom={false} className="w-full h-96">   
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*Chaque marqueur est un café, avec une popup qui affiche son nom et son adresse
            Les coordonnées sont celles du café */}
            <Marker position={[45.754890, 4.844490]}>
                <Popup>
                De l'autre côté du pont<br/>
                25 Cours Gambetta, 69003     
                </Popup>
            </Marker>
            <Marker position={[45.749040,4.839010]}>
                <Popup>
                Chères Cousines
                <br/>
                35 rue Chevreul 69007    
                </Popup>
            </Marker>
            <Marker position={[45.753660,4.830480]}>
                <Popup>
                Le Café des Antiquaires
                <br/>
                40 rue Auguste Comte, 69002
                </Popup>
            </Marker>
            <Marker position={[45.768690, 4.835910]}>
                <Popup>
                Le Laboratoire
                <br/>
                22 Rue Terraille, 69001
                </Popup>
            </Marker>
            <Marker position={[45.779410,4.834400]}>
                <Popup>
                Des Galets Bleus la Nuit
                <br/>
                18 Rue Pailleron, 69004                     
                </Popup>
            </Marker>
        </MapContainer>
    );
};