import React from 'react';
import Navigation from './Navigation';
import classes from './HomePage.module.css';

const HomePage = () => {
    return (
        <section id='/' className={classes.HomePage}>
            <Navigation />
            <div className={classes.slogan}>
                <h1 className='text-4xl text-white'>Join the Billiard4Life family today!</h1>
                <h3 className='text-xl mt-4 text-white'>Take your game to the next level</h3>
            </div>
        </section>
    );
};

export default HomePage;