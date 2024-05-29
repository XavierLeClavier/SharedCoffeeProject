import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Accueil() {
    return (
        <div className='bg-slate-300 mx-auto'>
            <h1 className="justify-center">Shared Coffee Project</h1>
            <p>This is the home page.</p>
            <Link to="/map">Cliquez bande de salope</Link>
        </div>
    );
}

export default Accueil;