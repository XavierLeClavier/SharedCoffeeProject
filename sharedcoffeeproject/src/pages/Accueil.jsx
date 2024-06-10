import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

import InstagramFeed from '../elements/InstagramFeed';
import LinkButton from '../elements/LinkButton';
import LeftImageText from '../elements/LeftImageText';
import RightImageText from '../elements/RightImageText';


import cosyCoffee from '../img/coffeeshop-cosy1.jpg';
import cosyCoffee2 from '../img/coffee-cosy1.jpg';
import cosyCoffee3 from '../img/coffee-cosy2.jpg';
import helpingHand from '../img/helping-hand.jpg';
import personInNeed from '../img/person-in-need.jpg';

function Accueil() {
    return (
        <div className='flex flex-col '>
            <div className="h-96 bg-cover bg-[50%] bg-no-repeat" style={{ backgroundImage: `url(${cosyCoffee})` }}>
                <div className="h-full w-full bg-black/60 ">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <h1 className="mb-6 text-5xl font-bold">The Shared Coffee Project</h1>
                            <h3 className="mb-8 text-3xl font-bold">"It's not just a coffee,<br/>it's a warm place"</h3>
                            <div className='justify-around flex'>
                                <Link to='/map'>
                                    <LinkButton content="Find a coffee" />
                                </Link>
                                <a href='#whoAreWe' >
                                    <LinkButton content="Who are we ?" />
                                </a>
                                <Link to='/contact'>
                                    <LinkButton content="Contact us" />
                                </Link>
                            </div>
                            <div className='mt-3'>
                                <Link to='/donate' className='w-fullw-3.5'>
                                        <LinkButton content="Donate to make someone's day!" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <section id="whoAreWe">
                <LeftImageText
                    imageSrc={cosyCoffee2}
                    alt="cosy coffee"
                    title="What is the Shared Coffee Project ?"
                    description={
                        <><p>
                            The Shared Coffee Project is a student-run campaign aiming to help people in need by
                            sharing a coffee and a warm place to stay
                        </p>
                        <p>
                            We base our model on the "suspended coffee" concept, where you can buy a coffee for
                            someone else who can't afford it. We also provide a map of coffee shops that participate
                            in the project.
                        </p></>}
                />
                <RightImageText
                    imageSrc={helpingHand}
                    alt="helping hand"
                    title="Who are we ?"
                    description={
                        <><p>
                            We are 3 students from the Lyon 1 University who are passionate about helping others.
                        </p>
                        <p>
                            This campaign began in Lyon, but it will extend and expand to help more people. We
                            believe that everyone deserves a warm place to stay and a coffee to drink. We hope that
                            you will join us in this project.
                        </p></>}
                />
                <LeftImageText
                    imageSrc={personInNeed}
                    alt="A person in need, in the streets"
                    title="How can you participate ?"   
                    description={
                        <><p>
                            If you're interested you can visit one of the coffee shops in the map page and get yourself
                            (and someone else) a coffee. Its as simple as that. You can also donate to the project to
                            help us expand and help more people. 
                        </p>
                        <p>
                            If you own a coffeeshop and want to participate in the project, you can contact us and we
                            will add you to the map. We will also send you a sticker to put on your window to show that
                            you are part of the project.
                        </p></>}
                />
            </section>
            {/* <section>
                <InstagramFeed />
            </section> */}
        </div>
    );
}

export default Accueil;