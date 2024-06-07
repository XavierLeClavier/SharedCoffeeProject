import React from 'react';

const LeftImageText = ({ imageSrc, title, description, alt }) => {
    return (
        <div className="flex flex-wrap-reverse flex-1 m-5 md:flex-nowrap text-center md:text-left">
            <img src={imageSrc} alt="alt" className="m-2 h-auto md:max-w-xl rounded-full object-cover pr-6" />
            
            <div className="flex flex-col justify-center pl-6 mx-3">
                <h3 className="mb-8 text-3xl font-bold">{title}</h3>
                {description}
            </div>
        </div>
    );
};

export default LeftImageText;