import React from 'react';
import './Header.css';

function Header(){
    return (
        <header>
            <nav>
                <div className="logo"><b>facebook</b></div>
                <div className="perfil">
                    <b>Meu pefil</b>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
    );

}

export default Header;