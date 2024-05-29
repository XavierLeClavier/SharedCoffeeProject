import React from 'react';


export default function SemiTransparentImage({ content, image }) {
    return (
        <div className='relative' style={{ backgroundImage: `url(${image})`, height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex'}}>
            {content}
        </div>
    );
}
