import React from 'react';
import reactLogo from '../resources/reactLogo.png';

const Header= () => {
    return (
        <header>
            <div>
                  <div><img src={reactLogo} width="50px" alt="logo"/></div>
                <div>Saxo Bank Group</div>
            </div>
        </header>     
    );
};

export default Header;