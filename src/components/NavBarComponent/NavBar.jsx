import React, { useState } from 'react'
import AccountMenu from '../AccountMenu/AccountMenu'
import './NavBar.css'
import Ayapone_logo from '../../assets/Logo PNG.svg'
import search_icon from '../../assets/Vector (4).svg'
import Arrow_down from '../../assets/Vector (5).svg'
import Cart_icon from '../../assets/Vector (6).svg'

const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    function handleAccountClick() {
        setShowDropdown(!showDropdown);
    }


    return (
        <div>
            <nav className="navbar-container">
                <img src={Ayapone_logo} />
                <form className="form-group">
                    <input type="search" placeholder="Search" />
                    <img src={search_icon} />
                    <button className="search-btn" type="submit">Search</button>
                </form>
                    <a href=""><p>Sell on Ayapone</p></a>
                    <div className="account-container" onClick={handleAccountClick}>
                        <p>Account</p>
                        <img src={Arrow_down} />
                        {showDropdown && <AccountMenu />}
                    </div>
                    <div className="support-container">
                        <p>Support</p>
                        <img src={Cart_icon} />
                    </div>
            </nav>
        </div>
    )
}

export default NavBar
