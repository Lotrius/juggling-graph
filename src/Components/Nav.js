import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink exact className="ml3 navbar-brand" activeClassName='' to='/'>Juggling Hell</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink exact className="Nav__link tab nav-item nav-link" activeClassName='active' to='/'>Daily Catches</NavLink>
                    </li>
                    <li>
                        <NavLink exact className="Nav__link tab nav-item nav-link" activeClassName='active' to='/average'>Average</NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    );
}

export default Nav;
