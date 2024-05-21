import React from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
    return (
        <div>
            <h1>Welcome to My React Website!</h1>
            <p>This is the home page.</p>
            <Link to="/map">Cliquez bande de salope</Link>
        </div>
    );
}

export default Accueil;