import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="w-full bg-white h-[65px] md:h-[80px] dark:bg-secondD">
            <Navigation />
        </header>
    );
};

export default Header;
