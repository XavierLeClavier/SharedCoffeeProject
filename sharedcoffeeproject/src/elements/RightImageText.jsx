import React from 'react';

const RightImageText = ({ imageSrc, title, description, alt }) => {
    return (
        <div className="m-5 md:flex text-center md:text-left">
            <div className="flex flex-col justify-center pr-6">
                <h3 className="mb-8 text-3xl font-bold">{title}</h3>
                {description}
            </div>
            <img src={imageSrc} alt={alt} className="h-auto md:max-w-xl rounded-full object-cover pl-6" />
        </div>
    );
};

export default RightImageText;